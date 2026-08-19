import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('pet_adoption_token'),
  isAuthenticated: !!localStorage.getItem('pet_adoption_token'),

  setAuth: (user, token) => {
    localStorage.setItem('pet_adoption_token', token);
    set({ user, token, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('pet_adoption_token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));