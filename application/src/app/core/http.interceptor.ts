import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

export class Interceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = request.clone({
      setHeaders: {
        url: environment.api
      }
    });

    return next.handle(clonedRequest);
  }
}
