import React from 'react';
import BreedItem from './BreedItem';

interface BreedListProps {
  breeds: string[];
  onSelect: (breed: string) => void;
}

const BreedList: React.FC<BreedListProps> = ({ breeds, onSelect }) => {
  if (breeds.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-3xl">
        <p className="text-muted-foreground">No breeds found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-1">
      {breeds.map((breed) => (
        <BreedItem key={breed} name={breed} onClick={() => onSelect(breed)} />
      ))}
    </div>
  );
};

export default BreedList;
