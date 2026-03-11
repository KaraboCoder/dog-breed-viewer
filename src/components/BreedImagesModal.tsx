import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useBreedImages } from '../hooks/useBreedImages';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

interface BreedImagesModalProps {
  breed: string | null;
  onClose: () => void;
}

const BreedImagesModal: React.FC<BreedImagesModalProps> = ({ breed, onClose }) => {
  const { data: images, isLoading, error } = useBreedImages(breed);

  return (
    <Dialog open={!!breed} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl capitalize">
            {breed} Images
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {isLoading ? (
            <Loader message={`Fetching ${breed} images...`} />
          ) : error ? (
            <ErrorMessage message={error instanceof Error ? error.message : 'Failed to load images'} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {images?.map((url, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-xl border bg-muted">
                  <img
                    src={url}
                    alt={`${breed} ${index + 1}`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BreedImagesModal;
