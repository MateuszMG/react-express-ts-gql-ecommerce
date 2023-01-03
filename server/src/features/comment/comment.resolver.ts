import {
  AddCommentInput,
  EditCommentInput,
  GetCommentsInput,
} from './comment.input';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';
import { IdInput } from 'src/types/input.type';
import { ResMessage } from 'src/types/object.type';
import { RolesGuard } from 'src/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { UserRoles } from '../user/user.model';
import Ctx from 'src/types/context.type';

@Resolver()
@UseGuards(new RolesGuard([UserRoles.USER, UserRoles.MODERATOR]))
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query(() => [Comment])
  async getComments(@Args('input') input: GetCommentsInput) {
    return await this.commentService.getComments(input);
  }

  @Mutation(() => Comment)
  async addComment(@Context() ctx: Ctx, @Args('input') input: AddCommentInput) {
    return await this.commentService.addComment(ctx, input);
  }

  @Mutation(() => Comment)
  async editComment(@Args('input') input: EditCommentInput) {
    return await this.commentService.editComment(input);
  }

  @Mutation(() => ResMessage)
  async deleteComment(
    @Args('input')
    input: IdInput,
  ) {
    return await this.commentService.deleteComment(input);
  }
}
