import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule, ShieldQuestion } from 'lucide-angular';
import { RowSkeletonComponent } from '../row-skeleton/row-skeleton.component';
import { RowComponent } from '../row/row.component';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchService } from '../../../components/services/search-box.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LucideAngularModule, RowSkeletonComponent, RowComponent],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit, OnDestroy {
  readonly shieldQuestionIcon = ShieldQuestion;

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
