import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class Forecast implements OnChanges {
  @Input() forecastData: any | null = null;
  dailyList: Array<any> = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['forecastData'] && this.forecastData) {
      this.processForecast(this.forecastData);
    }
  }

  processForecast(data: any) {
    // data.list è un array di previsioni ogni 3 ore.
    // Sempliﬁchiamo mostrando i prossimi 8 blocchi (24 ore) o i prossimi 5 giorni a tempo ridotto.
    const items = data.list || [];
    // prendiamo ogni 3h item per le prime 8 entries (24h) per semplicità
    this.dailyList = items.slice(0, 8).map((it: any) => ({
      dt_txt: it.dt_txt,
      temp: it.main.temp,
      icon: it.weather?.[0]?.icon,
      desc: it.weather?.[0]?.description
    }));
  }

  iconUrl(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
