import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private endpoint: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  public searchByCapital(capital: string) {
    return this.httpClient
      .get<Country[]>(`${this.endpoint}/capital/${capital}`)
      .pipe(catchError(() => of([])));
  }
}
