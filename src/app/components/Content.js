import DuaCard from './DuaCard';

export default async function Content() {
  try {
    // Construct the full API URL using the base URL of the app
    const apiUrl = `${window.location.origin}/api/duas`;

    // Fetch data from the API route
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Ensure fresh data on each request
    });

    if (!res.ok) {
      throw new Error('Failed to load duas');
    }

    const duas = await res.json();

    if (!duas || duas.length === 0) {
      return <div className="p-6">No duas found</div>;
    }

    return (
      <div className="flex-1 p-6 overflow-y-auto">
        {duas.map((dua) => (
          // If 'id' is available on each 'dua', use it for the key
          <DuaCard key={dua.id || dua.name} dua={dua} />
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="p-6 text-red-500">Error: {error.message}</div>;
  }
}
