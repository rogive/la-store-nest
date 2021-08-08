"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductService = class ProductService {
    constructor(ProductModel) {
        this.ProductModel = ProductModel;
    }
    async getProducts() {
        const products = await this.ProductModel.find();
        return products;
    }
    async getProduct(productID) {
        const product = await this.ProductModel.findById(productID);
        return product;
    }
    async getProductByName(name) {
        const product = await this.ProductModel.findOne({ name: name });
        return product;
    }
    async create(productDTO) {
        const product = new this.ProductModel(productDTO);
        return await product.save();
    }
    async deleteProduct(productID) {
        const deletedProduct = await this.ProductModel.findByIdAndDelete(productID);
        return deletedProduct;
    }
    async updateProduct(productID, productDTO) {
        const updatedProduct = this.ProductModel.findByIdAndUpdate(productID, productDTO, { new: true });
        return updatedProduct;
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map