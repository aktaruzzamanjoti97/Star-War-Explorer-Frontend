import { PeopleResponse, Person } from '@/types';
import axios from 'axios';

const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
});

export const swAPI = {
	// Fetch people with pagination and search
	getPeoples: async (
		page: number = 1,
		search?: string,
		limit: number = 8
	): Promise<PeopleResponse> => {
		const params = new URLSearchParams();
		params.append('page', page.toString());
		params.append('limit', limit.toString());
		if (search) params.append('search', search);
		const response = await api.get(`/people?${params.toString()}`);
		return response.data;
	},

	// Fetch single person details
	getPerson: async (id: string): Promise<Person> => {
		const response = await api.get(`/people/${id}`);
		return response.data;
	},
};
