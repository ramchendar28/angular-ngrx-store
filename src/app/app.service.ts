import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  Login() {
    return of('Saksham').pipe(delay(1000));
  }

  getdata(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
