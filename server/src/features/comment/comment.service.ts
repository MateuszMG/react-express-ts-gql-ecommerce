import {
  AddCommentInput,
  EditCommentInput,
  GetCommentsInput,
} from './comment.input';
import { Comment, CommentDocument } from './comment.model';
import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResMessage } from 'src/types/object.type';
import Ctx from 'src/types/context.type';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('comment') private commentModel: Model<CommentDocument>,
  ) {}

  async getComments(input: GetCommentsInput): Promise<Comment[]> {
    const comments = await this.commentModel
      .find({
        id: input.productId,
      })
      .limit(10);

    return comments;
  }

  async addComment(ctx: Ctx, input: AddCommentInput): Promise<Comment> {
    const { username, id } = ctx.req.user;

    const comment: Omit<Comment, 'id' | 'createdAt' | 'updatedAt'> = {
      ...input,
      username,
      userId: id,
    };

    return await new this.commentModel(comment).save();
  }

  async editComment(input: EditCommentInput): Promise<Comment> {
    const updatedComment = await this.commentModel.findByIdAndUpdate(
      input.id,
      { comment: input.comment },
      { new: true },
    );

    return updatedComment;
  }

  async deleteComment(input: IdInput): Promise<ResMessage> {
    await this.commentModel.findByIdAndDelete(input.id);
    return { message: 'Comment has been deleted' };
  }
}
