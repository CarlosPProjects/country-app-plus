import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Subscription } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../../components/services/search-box.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnDestroy, OnInit {
  searchValue: string = '';
  private subscription!: Subscription;

  public loading: boolean = true;
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private searchService: SearchService
  ) {}

  private searchByCapital(value: string): void {
    this.loading = true;
    this.countriesService.searchByCapital(value).subscribe({
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
        this.searchByCapital(value);
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
