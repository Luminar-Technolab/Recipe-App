import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router)

  if(!!sessionStorage.getItem("token")){
    return true
  }
else{
  alert("Operation Denied... Please login!!!")
  router.navigateByUrl('/')
  return false
}
};
