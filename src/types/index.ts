export interface Person {
	uid: string;
	name: string;
	url: string;
	description?: string;
	properties?: PersonProperties;
}

export interface PersonProperties {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

export interface PeopleResponse {
	results: Person[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
	next?: string | null;
	previous?: string | null;
}
