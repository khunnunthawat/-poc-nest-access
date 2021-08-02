import { Controller, Get, UseGuards } from '@nestjs/common';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';
import { ArticleService } from './article.service';
import { AuthAccessGuard } from '../../auth-access.guard';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getHello(): string {
    return this.articleService.getHello();
  }

  @UseGuards(AuthAccessGuard, ACGuard)
  @UseRoles({
    resource: 'permission',
    action: 'read',
    possession: 'any',
  })
  @Get('/roles')
  root(@UserRoles() userRoles: any) {
    return this.articleService.root(userRoles);
  }
}
