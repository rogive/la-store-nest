import { Schema } from 'mongoose';
export declare const ProductSchema: Schema<import("mongoose").Document<any, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    createdAt: Date;
}
