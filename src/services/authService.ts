import axiosClient from '../api/axiosClient';
import type { LoginCredentials, AuthResponse } from '../types/auth';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return axiosClient.post('/auth/login', credentials);
  },
};
