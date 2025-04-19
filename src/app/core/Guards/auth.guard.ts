import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (sessionStorage.getItem('isLoggedIn') === 'true') {

    return true;
  }

  return false;
};
