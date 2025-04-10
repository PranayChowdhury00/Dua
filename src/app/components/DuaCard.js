export default function DuaCard({ dua }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-xl font-semibold">{dua.dua_name_en}</h2>
      <p className="text-gray-600">{dua.dua_en}</p>
      <p className="text-sm text-gray-400 mt-2">Ref: {dua.refference_en}</p>
    </div>
  );
}
