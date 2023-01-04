import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../product/product.model';
import { Sold, SoldDocument } from './sold.model';

@Injectable()
export class SoldService {
  constructor(
    @InjectModel(Sold.name) private soldModel: Model<SoldDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
}
