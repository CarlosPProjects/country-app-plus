import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../../components/services/search-box.service';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnDestroy, OnInit {
  searchValue: string = '';
  private subscription!: Subscription;

  public loading: boolean = true;
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private searchService: SearchService
  ) {}

  private searchByCountry(value: string): void {
    this.loading = true;
    this.countriesService.searchByCountry(value).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al buscar países:', error);
        this.countries = [];
        this.loading = false;
      },
    });
  }

  ngOnInit() {
    this.subscription = this.searchService.searchValue$.subscribe((value) => {
      this.searchValue = value;
      if (value) {
        this.searchByCountry(value);
      } else {
        this.countries = [];
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
