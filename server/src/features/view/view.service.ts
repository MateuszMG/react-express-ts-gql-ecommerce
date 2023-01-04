import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument, Views } from '../product/product.model';
import { View, ViewDocument } from './view.model';
import Ctx from 'src/types/context.type';

interface GuestIPObject {
  guestIP: string;
}

@Injectable()
export class ViewService {
  constructor(
    @InjectModel(View.name) private viewModel: Model<ViewDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async addView(ctx: Ctx, input: IdInput) {
    const product = await this.productModel.findById(input.id);

    const guestIP = ctx.req.socket.remoteAddress;
    const device = ctx.req.headers['user-agent'];
    const userId = ctx.req.user?.id || null;

    await new this.viewModel({
      device,
      guestIP,
      productId: input.id,
      userId,
    }).save();

    const guestIPObjects = (await this.viewModel
      .find({ productId: input.id })
      .select(['guestIP', '-_id'])) as GuestIPObject[];

    const guestIPs = guestIPObjects.map((item) => item.guestIP);
    const noDuplicateGuestIPs = [...new Set(guestIPs)];

    const views: Views = {
      ...product.views,
      originalAndFakeTotal: guestIPs.length,
      originalTotal: guestIPs.length + product.views.fakeTotal,
      originalTotalViewsWithoutDuplicateIPAddresses: noDuplicateGuestIPs.length,
    };

    await this.productModel.findByIdAndUpdate(input.id, { views });
  }
}
