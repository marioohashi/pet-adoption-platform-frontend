// src/components/PetList.tsx
import { useQuery } from "@tanstack/react-query";
import { getPets } from "../services/petService";
import { PetListCard } from "./PetListCard";

export function PetList() {
  const { data: pets, isLoading, isError, error } = useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });

  if (isLoading) {
    return <div className="p-4 text-center">Carregando animais...</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">Erro: {String(error)}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {pets?.length ? (
        pets.map((pet) => <PetListCard key={pet.id} pet={pet} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Nenhum pet encontrado.
        </p>
      )}
    </div>
  );
}
