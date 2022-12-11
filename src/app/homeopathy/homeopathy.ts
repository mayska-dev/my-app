import { Analyse } from "../analyse/analyse";

export interface Homeopathy {
    id: number;
    name: string;
    description: string;
    picture: string;
    analyse:Analyse[];
}
