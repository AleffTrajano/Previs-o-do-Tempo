import { WeatherDatas } from 'src/app/models/interfaces/Weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{
  initialCityName ='São Paulo';
  weatherDatas!:WeatherDatas;

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }
    getWheatherDatas(cityName:string):void{
      this.weatherService.getWeatherDatas(cityName).subscribe({
        next: (response) => {
          //console.log(response);
          //response && (this.weatherDatas = response);
          //console.log(this.weatherDatas.main.)

        },
        error:(error) => console.log(error),
      })
    }
  }
