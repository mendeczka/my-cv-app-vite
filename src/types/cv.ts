export interface Experience {
    year: number;
    description: string;
}
export interface CvDetails {
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

export interface CvData {
    personal: CvPersonal;
    details: CvDetails;
}

export enum CvH2Enum {
    Experience="Experience",
    Education="Education"
}