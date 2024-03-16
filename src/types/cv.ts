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

export interface CvHeader {
    name: string;
    lastName: string;
}

export interface CvPersonal {
    photo: string;
    name: string;
    lastName: string;
    position: string;
}

export enum CvH2Enum {
    Experience="Experience",
    Education="Education"
}