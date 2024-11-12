import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Subscription, switchMap } from 'rxjs';
import { LucideAngularModule, ChevronLeft, UsersRound } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit, OnDestroy {

  readonly chevronLeftIcon = ChevronLeft;
  readonly usersRoundIcon = UsersRound;

  public country?: Country;
  private subscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe({
        next: (country) => {
          if (!country) return this.router.navigateByUrl('/by-capital');
          return (this.country = country);
        },
        error: (error) => {
          console.error('Error al buscar el país:', error);
          this.router.navigateByUrl('/by-capital');
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
