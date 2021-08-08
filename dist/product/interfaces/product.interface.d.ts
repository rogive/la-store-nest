import { Document } from 'mongoose';
export interface Product extends Document {
    readonly name: string;
    readonly price: number;
    readonly category: string;
    readonly description: string;
    readonly image: string;
    readonly stock: number;
    readonly tags: string[];
    readonly available: boolean;
}
