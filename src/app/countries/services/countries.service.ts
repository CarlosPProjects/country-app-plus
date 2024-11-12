import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private endpoint: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  public searchCountryByAlphaCode(
    alphaCode: string
  ): Observable<Country | null> {
    return this.httpClient
      .get<Country[]>(`${this.endpoint}/alpha/${alphaCode}`)
      .pipe(
        map((countries) => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

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
