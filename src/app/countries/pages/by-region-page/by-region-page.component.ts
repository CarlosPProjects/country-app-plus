import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Subscription } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../../components/services/search-box.service';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit, OnDestroy {
  searchValue: string = '';
  private subscription!: Subscription;

  public loading: boolean = true;
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private searchService: SearchService
  ) {}

  private searchByRegion(value: string): void {
    this.loading = true;
    this.countriesService.searchByRegion(value).subscribe({
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
        this.searchByRegion(value);
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
