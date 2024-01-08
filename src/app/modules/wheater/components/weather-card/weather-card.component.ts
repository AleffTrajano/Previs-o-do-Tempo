import { WeatherDatas } from './../../../../models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  @Input() WeatherDatasInput!:WeatherDatas;

  ngOnInit(): void {
    console.log("dados recebidos do papai - weather-card:",
    this.WeatherDatasInput
    );
  }

}
