import {PetList} from '../components/PetList'
export function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">
        🐾 Responsible Pet Adoption
      </h1>
      <p className="text-gray-600 text-lg">
        Conectamos ONGs, doadores e adotantes num ambiente seguro e intuitivo.
      </p>
      <PetList/>
    </div>
  );
}