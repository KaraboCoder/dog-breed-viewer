import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBreeds } from '../hooks/useBreeds';
import BreedList from '../components/BreedList';
import BreedSearch from '../components/BreedSearch';
import BreedImagesModal from '../components/BreedImagesModal';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { Button } from '../components/ui/button';
import { LogOut, User as UserIcon } from 'lucide-react';

import { useNavigate } from '@tanstack/react-router';

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { data: breedsMap, isLoading, error } = useBreeds();
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    navigate({ to: '/login' });
  };

  const breeds = breedsMap ? Object.keys(breedsMap) : [];
  const filteredBreeds = breeds.filter((breed) =>
    breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-muted-foreground">@{user?.username}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="rounded-full">
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Dog Breeds</h1>
        
        <BreedSearch value={search} onChange={setSearch} />

        {isLoading ? (
          <Loader message="Loading available breeds..." />
        ) : error ? (
          <ErrorMessage message={error instanceof Error ? error.message : 'Unable to load breeds'} />
        ) : (
          <BreedList breeds={filteredBreeds} onSelect={setSelectedBreed} />
        )}
      </main>

      <BreedImagesModal
        breed={selectedBreed}
        onClose={() => setSelectedBreed(null)}
      />
    </div>
  );
};

export default HomePage;
