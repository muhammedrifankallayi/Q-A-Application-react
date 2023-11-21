import { Injectable ,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements OnInit{

ngOnInit(): void {
  


}

  private apiKey = "59356f1a3e09a40ae43c4518a51be127"
  



  constructor(private http: HttpClient) { }
  
 
  
  getCurrentWeather(country:string) {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${this.apiKey}`
 return this.http.get(url);
  }

  


   


}
