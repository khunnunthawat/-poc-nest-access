import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  private videos: string[] = ['Funny Cats', 'Ninja Dogs'];

  root(roles: string[]) {
    return {
      videos: this.videos,
      userRoles: roles,
    };
  }

  getHello(): string {
    return 'Khunnunthawat!';
  }
}
