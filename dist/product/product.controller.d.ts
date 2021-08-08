import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(res: any, body: ProductDTO): Promise<any>;
    getProducts(res: any): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
    updateProduct(res: any, productID: any, body: ProductDTO): Promise<any>;
}
