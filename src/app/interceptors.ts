import { HttpModule, Request, Response } from '@angular/http'
import { Interceptor } from 'angular-http-interceptor'
import { DialogService } from 'angular-spa/interceptors/dialog'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'

export class MyInterceptor implements Interceptor {

    before(request: Request): Observable<any> {
        UIkit.notify('Before Request')
        request.headers.set('Custom-Header', 'Custom Value')
        return Observable.empty()
    }
    after(response: Response) {
        // tslint:disable-next-line:no-console
        console.info(response)
        UIkit.notify('After Interceptor: ' + response.text())
    }
    error(error: any) {
        UIkit.modal.alert('Error ' + error)
    }
}
