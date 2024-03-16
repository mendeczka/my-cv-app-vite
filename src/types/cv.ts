export interface Experience {
    year: number;
    description: string;
}

export interface CvData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[];
}