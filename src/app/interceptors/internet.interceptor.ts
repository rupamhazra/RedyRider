import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToasterService } from '../core/globalMethods/global-methods'
@Injectable()
export class InternetInterceptor implements HttpInterceptor {
    constructor(
        private toasterService: ToasterService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // For internet connection check
            if (err.status === 0) {
                //console.log('err', err)
                let error = {
                    error: {
                        'status': err.status,
                        'msg': "Check internet connection"
                    }
                }
                return throwError(error);
            }
            // if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            // }


        }));
    }
}