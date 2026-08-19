// src/services/petService.ts
import { api } from './api';
import type { Pet } from '../types';

export const getPets = async (): Promise<Pet[]> => {
  const response = await api.get<Pet[]>('/animals'); 
  return response.data;
};