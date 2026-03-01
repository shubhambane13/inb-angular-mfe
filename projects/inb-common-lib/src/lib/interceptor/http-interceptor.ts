import { type HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { inject } from '@angular/core';

export const HttpInterceptor: HttpInterceptorFn = (req, next) => {

  const _globalService = inject(GlobalService);

  // 1. MODIFY REQUEST
  // Requests are immutable, so we must clone it to add headers
  let modifiedReq = req.clone();
  if (_globalService.token()) {
    modifiedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + _globalService.token(),
      },
    });
  }

  // 2. MODIFY/LOG RESPONSE
  return next(modifiedReq).pipe(
    tap((event) => {
      // We only want to log when the full response arrives (not progress events)
      // if (event.type === HttpEventType.Response) {
      //   console.log('Response Body:', event.body);
      //   console.log('Response Status:', event.status);
      // }
    }),
  );
};
