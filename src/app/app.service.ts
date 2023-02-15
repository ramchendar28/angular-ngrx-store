import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  Login() {
    return of('Saksham').pipe(
      delay(1000)
    )
  }
}