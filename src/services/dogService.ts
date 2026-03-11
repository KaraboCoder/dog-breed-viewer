import { dogClient } from '../api/dogClient';

export const dogService = {
  getBreeds: async (): Promise<Record<string, string[]>> => {
    const response = await dogClient.get('/breeds/list/all') as any;
    return response.message;
  },
  getBreedImages: async (breed: string): Promise<string[]> => {
    const response = await dogClient.get(`/breed/${breed}/images/random/3`) as any;
    return response.message;
  },
};
