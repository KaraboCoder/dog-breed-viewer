import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/authService';
import type { LoginCredentials } from '../types/auth';
import { useAuth } from '../context/AuthContext';

export const useLogin = () => {
  const { login } = useAuth();
  
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      login(data);
    },
  });
};
