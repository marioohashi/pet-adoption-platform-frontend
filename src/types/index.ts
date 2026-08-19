export type UserRole = 'ADMIN' | 'USER';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  avatar?: string | null;
  bio?: string | null;
  city?: string | null;
  state?: string | null;
  role?: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// ==========================================
// Tipos de Animais (Pet)
// ==========================================

export type PetStatus = 'available' | 'in_process' | 'adopted';

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed?: string | null;
  age?: number | null;
  size?: string | null;
  sex?: string | null;
  description?: string | null;
  status: PetStatus | string;
  photo?: string | null;
  userId: string;
  user?: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePetInput {
  name: string;
  species: string;
  breed?: string;
  age?: number;
  size?: string;
  sex?: string;
  description?: string;
  photo?: string;
}