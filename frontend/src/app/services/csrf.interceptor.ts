import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Get the csrf token from the cookie
//     debugger
//     const csrfToken = this.getCookie('csrftoken');
    
//     // If the token exists, add it to the request headers
//     if (csrfToken) {
//       const modifiedReq = req.clone({
//         withCredentials: true,
//         headers: req.headers.set('X-CSRFToken', csrfToken)
//       });
//       return next.handle(modifiedReq);
//     }
//     return next.handle(req);
//   }

//   private getCookie(name: string): string | undefined {
//     const value = '; ' + document.cookie;
//     const parts = value.split('; ' + name + '=');
//     if (parts.length === 2) {
//       return parts.pop()?.split(';').shift();
//     }
//     return undefined
//   }
}

export function CsrfInterceptorFn(req: HttpRequest<any>, next: HttpHandlerFn) {
  // Get the csrf token from the cookie
  const csrfToken = getCookie('csrftoken');
  
  // If the token exists, add it to the request headers
  if (csrfToken) {
    const modifiedReq = req.clone({
      withCredentials: true,
      headers: req.headers.set('X-CSRFToken', csrfToken)
    });
    return next(modifiedReq);
  }
  return next(req);
}

export function getCookie(name: string): string | undefined {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
    return undefined
}