import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router();
  let authService = new AuthService(router);
  
  if(!authService.isLoggedIn()) {
    router.navigate(['/login']);
  }

  return authService.isLoggedIn();
};
