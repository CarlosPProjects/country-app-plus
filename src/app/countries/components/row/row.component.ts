import { Component, Input } from '@angular/core';
import { LucideAngularModule, Image, Info } from 'lucide-angular';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './row.component.html',
  styles: ``,
})
export class RowComponent {
  readonly imageIcon = Image;
  readonly infoIcon = Info;

  @Input() country!: Country;

  constructor(private router: Router) {}

  public viewCountryDetails(alphaCode : string): void {
    this.router.navigate(['/country', alphaCode]);
  }
}
