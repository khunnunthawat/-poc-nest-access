import { RolesBuilder } from 'nest-access-control';
import { AppRoles } from './enum/app-roles.enum';

export const roles: RolesBuilder = new RolesBuilder();
roles
  .grant(AppRoles.STAFF_CREATE_ANY_INFO) // define new or modify existing role. also takes an array.
  .createOwn('permission') // equivalent to .createOwn('video', ['*'])
  .deleteOwn('permission')
  .readAny('permission')
  .grant(AppRoles.ADMIN_UPDATE_OWN_INFO) // switch to another role without breaking the chain
  .extend(AppRoles.STAFF_CREATE_ANY_INFO) // inherit role capabilities. also takes an array
  .updateAny('permission', ['title']) // explicitly defined attributes
  .deleteAny('permission');
