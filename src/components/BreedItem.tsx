import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreedItemProps {
  name: string;
  onClick: () => void;
}

const BreedItem: React.FC<BreedItemProps> = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 mb-2 text-left bg-white hover:bg-white/80 border rounded-xl transition-all group"
  >
    <span className="text-lg font-medium capitalize">{name}</span>
    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
  </button>
);

export default BreedItem;
