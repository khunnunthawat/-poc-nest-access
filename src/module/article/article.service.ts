import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  private video: string[] = ['Funny Cats', 'Funny Dogs'];

  root(roles: string[]) {
    console.log('ArticleService', roles);
    return {
      video: this.video,
      userRoles: roles,
    };
  }

  getHello(): string {
    return 'Khunnunthawat!';
  }
}
