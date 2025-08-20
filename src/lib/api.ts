import axios from 'axios';
import { Person, PeopleResponse, Film, Species, Vehicle, Starship } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const swAPI = {
  // Fetch people with pagination and search
  getPeople: async (page: number = 1, search?: string): Promise<PeopleResponse> => {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    if (search) params.append('search', search);
    
    const response = await api.get(`/people?${params.toString()}`);
    return response.data;
  },

  // Fetch single person details
  getPerson: async (id: string): Promise<Person> => {
    const response = await api.get(`/people/${id}`);
    return response.data;
  },

  // Fetch films for a person
  getPersonFilms: async (id: string): Promise<Film[]> => {
    const response = await api.get(`/people/${id}/films`);
    return response.data;
  },

  // Fetch species for a person
  getPersonSpecies: async (id: string): Promise<Species[]> => {
    const response = await api.get(`/people/${id}/species`);
    return response.data;
  },

  // Fetch vehicles for a person
  getPersonVehicles: async (id: string): Promise<Vehicle[]> => {
    const response = await api.get(`/people/${id}/vehicles`);
    return response.data;
  },

  // Fetch starships for a person
  getPersonStarships: async (id: string): Promise<Starship[]> => {
    const response = await api.get(`/people/${id}/starships`);
    return response.data;
  },
};

// Helper function to get character image
// export const getCharacterImageUrl = (id: string): string => {
//   // Using placeholder images since SWAPI doesn't provide images
//   // In production, you might want to use actual Star Wars character images
//   return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
// };

// Error handler for images
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  target.src = '/placeholder-character.png';
};