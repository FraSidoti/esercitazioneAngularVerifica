import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = '"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m"';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}/weather`;
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('lang', 'it');

    return this.http.get(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getForecast(city: string): Observable<any> {
    const url = `${this.baseUrl}/forecast`;
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('lang', 'it');

    return this.http.get(url, { params }).pipe(
      // trasformiamo la risposta per ottenere items di previsione utili
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let message = 'Errore sconosciuto';
    if (err.error && err.error.message) { message = err.error.message; }
    if (err.status === 404) { message = 'Città non trovata'; }
    return throwError(() => ({ status: err.status, message }));
  }
}
