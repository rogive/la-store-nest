import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './interfaces/product.interface';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly ProductModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.ProductModel.find();
    return products;
  }

  async getProduct(productID: string): Promise<Product> {
    const product = await this.ProductModel.findById(productID);
    return product;
  }

  async getProductByName(name: string): Promise<Product> {
    const product = await this.ProductModel.findOne({ name: name });
    return product;
  }

  async create(productDTO: ProductDTO): Promise<Product> {
    const product = new this.ProductModel(productDTO);
    return await product.save();
  }

  async deleteProduct(productID: string): Promise<Product> {
    const deletedProduct = await this.ProductModel.findByIdAndDelete(productID);
    return deletedProduct;
  }

  async updateProduct(
    productID: string,
    productDTO: ProductDTO,
  ): Promise<Product> {
    const updatedProduct = this.ProductModel.findByIdAndUpdate(
      productID,
      productDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
