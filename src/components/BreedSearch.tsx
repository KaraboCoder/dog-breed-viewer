import React from 'react';
import { Input } from './ui/input';

interface BreedSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const BreedSearch: React.FC<BreedSearchProps> = ({ value, onChange }) => (
  <div className="relative mb-6">
    <Input
      type="text"
      placeholder="Search dog breeds..."
      className="h-12 px-4 text-base"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default BreedSearch;
