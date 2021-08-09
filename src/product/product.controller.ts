import {
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
  Get,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';

import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  async create(@Res() res, @Body() body: ProductDTO) {
    const product = await this.productService.create(body);

    return res.status(HttpStatus.OK).json({
      message: 'Product created succesfully',
      product,
    });
  }

  @Get('/list')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      message: 'successful',
      products,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'successful',
      product,
    });
  }

  @Delete('/:id')
  async deleteProduct(@Res() res, @Param('id') productID) {
    const product = await this.productService.deleteProduct(productID);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product deleted succesfully',
      product,
    });
  }

  @Put('/:id')
  async updateProduct(
    @Res() res,
    @Param('id') productID,
    @Body() body: ProductDTO,
  ) {
    const product = await this.productService.updateProduct(productID, body);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated succesfully',
      product,
    });
  }
}
