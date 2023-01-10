import { ViewContents, View, ViewModel } from './model';
import { Model } from 'mongoose';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { Product, ProductModel, Views } from '../product/model';

interface GuestIPObject {
  guestIP: string;
}

export class ViewService {
  async addView(ctx: Context, input: IdInput) {
    const product = (await ProductModel.findById(input._id)) as Product; // TODO: add validation

    const guestIP = ctx.req.socket.remoteAddress || 'Not found';
    const device = ctx.req.headers['user-agent'] || 'Not found';
    const userId = ctx.req.user?._id || null;

    await new ViewModel<ViewContents>({
      device,
      guestIP,
      productId: input._id,
      userId,
    }).save();

    const guestIPObjects = (await ViewModel.find({
      productId: input._id,
    }).select(['guestIP', '-_id'])) as GuestIPObject[];

    const guestIPs = guestIPObjects.map((item) => item.guestIP);
    const noDuplicateGuestIPs = [...new Set(guestIPs)];

    const views: Views = {
      ...product.views,
      originalAndFakeTotal: guestIPs.length,
      originalTotal: guestIPs.length + product.views.fakeTotal,
      originalTotalViewsWithoutDuplicateIPAddresses: noDuplicateGuestIPs.length,
    };

    await ProductModel.findByIdAndUpdate(input._id, { views });
  }
}
