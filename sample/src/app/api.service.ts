import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
gett(){
 return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
}

}
