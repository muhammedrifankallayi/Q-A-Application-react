import { Component ,OnInit } from '@angular/core';
import { FormControl ,FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  country:string='Mumbai'
   
  temperature:any
  minTemperature:any
  maxTemperature:any
  windSpeed:any
  humidity:any
  city:string = ''
date:Date = new Date()
  ngOnInit(): void {
  this.service.getCurrentWeather(this.country).subscribe((res:any)=>{
    console.log(res);
    const weatherData = res
   this.temperature = weatherData.main.temp;
    this.minTemperature = weatherData.main.temp_min;
    this.maxTemperature = weatherData.main.temp_max;
    this.windSpeed = weatherData.wind.speed;
    this.humidity = weatherData.main.humidity;
    this.city = weatherData.name
  })
  }
constructor(private service:UserserviceService){}




call(){
  this.ngOnInit()
}




}
