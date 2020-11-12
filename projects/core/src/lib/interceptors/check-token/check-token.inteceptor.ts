import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimerService } from 'dls';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenInterceptor implements HttpInterceptor{

  constructor(private timer: TimerService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = req.clone();
    if (sessionStorage.getItem('TOKEN_CORE')) {
      clone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('TOKEN_CORE')}`
        }
      });
    }
    return next.handle(clone).pipe(
      tap( (response: HttpResponse<any>) => {
        if( typeof response.body === 'object' ) {
          sessionStorage.setItem('TOKEN_CORE', response.body.respuesta.tokenInformation.token);
          sessionStorage.setItem('TOKEN_EXPIRATION_CORE', response.body.respuesta.tokenInformation.expirationDate);
        }
        this.timer.restartCountdown(10 * 60);
        this.timer.toogleCountdown();
      })
    );
  } 
}
