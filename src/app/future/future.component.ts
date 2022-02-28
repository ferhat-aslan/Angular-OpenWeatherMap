import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  weatherData:any=[];
  forecastDetails:any;
  selectedIndex:number | undefined;
  primaryDisplay=true;
  secondaryDisplay=false;

  constructor(private forecastService:ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
      pluck('list')
    ).subscribe(data=>{
      this.futureForecast(data)
    })
  }
futureForecast(data:any){
  for(let i=0;i<data.length;i=i+8){
    console.log("data0",data);
    
    this.weatherData.push(data[i]);
  }
  console.log("cs",this.weatherData);

}
toggle(data:any, index:any){
  this.primaryDisplay=!this.primaryDisplay;
  this.secondaryDisplay=!this.secondaryDisplay;
  this.forecastDetails=data;
  this.selectedIndex=index;
}
showDetails(data:any,i:number){
this.forecastDetails=data;
this.selectedIndex=i;
}
}
