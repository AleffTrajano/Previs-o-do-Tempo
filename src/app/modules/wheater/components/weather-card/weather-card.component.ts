import { faDroplet, faTemperature0, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../../models/interfaces/Weather';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent{
  @Input() WeatherDatasInput!: WeatherDatas;

//dados da previsão do tempo recebidos pelo component pai
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humitidyIcon = faDroplet;
  windIcon = faWind;






}
