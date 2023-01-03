import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument, Views } from '../product/product.model';
import { ViewDocument } from './view.model';
import Ctx from 'src/types/context.type';

interface IPAdressObject {
  IPAdress: string;
}

@Injectable()
export class ViewService {
  constructor(
    @InjectModel('view') private viewModel: Model<ViewDocument>,
    @InjectModel('product') private productModel: Model<ProductDocument>,
  ) {}

  async addView(ctx: Ctx, input: IdInput) {
    const product = await this.productModel.findById(input.id);

    const IPAdress = ctx.req.socket.remoteAddress;
    const device = ctx.req.headers['user-agent'];
    const userId = ctx.req.user?.id || null;

    await new this.viewModel({
      device,
      IPAdress,
      productId: input.id,
      userId,
    }).save();

    const IPAdressObjects = (await this.viewModel
      .find({ productId: input.id })
      .select(['IPAdress', '-_id'])) as IPAdressObject[];

    const IPAdresses = IPAdressObjects.map((item) => item.IPAdress);
    const noDuplicateIPAdresses = [...new Set(IPAdresses)];

    const views: Views = {
      ...product.views,
      originalAndFakeTotal: IPAdresses.length,
      originalTotal: IPAdresses.length + product.views.fakeTotal,
      originalTotalViewsWithoutDuplicateIPAddresses:
        noDuplicateIPAdresses.length,
    };

    await this.productModel.findByIdAndUpdate(input.id, { views });
  }
}
