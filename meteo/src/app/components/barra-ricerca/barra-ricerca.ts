import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'barra-ricerca',
  templateUrl: './barra-ricerca.html',
  styleUrls: ['./barra-ricerca.css']
})
export class BarraRicerca {
  city = '';
  @Output() search = new EventEmitter<string>();

  doSearch() {
    const trimmed = this.city.trim();
    if (trimmed) {
      this.search.emit(trimmed);
    }
  }
}
