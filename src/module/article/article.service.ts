import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  private permission: string[] = ['staff-info', 'staff-wallet'];

  root(roles: string[]) {
    console.log('ArticleService', roles);
    return {
      permission: this.permission,
      userRoles: roles,
    };
  }

  getHello(): string {
    return 'Khunnunthawat!';
  }
}
