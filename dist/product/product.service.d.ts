import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { ProductDTO } from './dto/product.dto';
export declare class ProductService {
    private readonly ProductModel;
    constructor(ProductModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productID: string): Promise<Product>;
    getProductByName(name: string): Promise<Product>;
    create(productDTO: ProductDTO): Promise<Product>;
    deleteProduct(productID: string): Promise<Product>;
    updateProduct(productID: string, productDTO: ProductDTO): Promise<Product>;
}
