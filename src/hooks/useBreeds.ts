import { useQuery } from '@tanstack/react-query';
import { dogService } from '../services/dogService';

export const useBreeds = () => {
  return useQuery({
    queryKey: ['breeds'],
    queryFn: () => dogService.getBreeds(),
    staleTime: 1000 * 60 * 60,
  });
};
