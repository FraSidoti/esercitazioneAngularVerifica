import { Component, Input } from '@angular/core';

@Component({
  selector: 'tempo-attuale',
  templateUrl: './tempo-attuale.html',
  styleUrls: ['./tempo-attuale.css']
})
export class TempoAttuale {
  @Input() data: any | null = null;

  getIconUrl(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
