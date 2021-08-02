import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthAccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const fakeUser = {
      roles: ['ADMIN_UPDATE_OWN_VIDEO', 'USER_CREATE_ANY_VIDEO'],
      username: '@fake',
    };
    req.user = fakeUser;
    return true;
  }
}
