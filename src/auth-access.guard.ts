import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthAccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const fakeUser = {
      roles: ['USER_CREATE_ANY_VIDEO', 'ADMIN_UPDATE_OWN_VIDEO'],
      username: 'Khunday',
    };
    console.log('fakeUser :', fakeUser);
    req.user = fakeUser;
    return true;
  }
}
