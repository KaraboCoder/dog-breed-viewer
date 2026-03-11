import { useQuery } from '@tanstack/react-query';
import { dogService } from '../services/dogService';

export const useBreedImages = (breed: string | null) => {
  return useQuery({
    queryKey: ['breed-images', breed],
    queryFn: () => dogService.getBreedImages(breed!),
    enabled: !!breed,
    staleTime: 1000 * 60 * 5,
  });
};
