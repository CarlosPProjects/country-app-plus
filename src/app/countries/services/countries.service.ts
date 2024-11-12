import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private endpoint: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  public searchByCapital(capital: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.endpoint}/capital/${capital}`)
      .pipe(catchError(() => of([])));
  }

  public searchByCountry(country: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.endpoint}/name/${country}`)
      .pipe(catchError(() => of([])));
  }

  public searchByRegion(region: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.endpoint}/region/${region}`)
      .pipe(catchError(() => of([])));
  }

}
