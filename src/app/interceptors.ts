import { HttpModule, Request, Response } from '@angular/http';
import { InterceptorModule, Interceptor, DialogService } from 'angular-http-interceptor'
import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/empty"

export class MyInterceptor implements Interceptor {

    before(request: Request): Observable<any> {
        UIkit.notify("Before Request")
        request.headers.set("Custom-Header", "Custom Value")
        return Observable.empty()
    }
    after(response: Response) {
        console.info(response)
        UIkit.notify("After Interceptor: " + response.text())
    }
    error(error: any) {
        UIkit.modal.alert("Error " + error)
    }
}