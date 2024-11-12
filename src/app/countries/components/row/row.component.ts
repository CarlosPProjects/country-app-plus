import { Component, Input } from '@angular/core';
import { LucideAngularModule, Image, Info } from 'lucide-angular';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './row.component.html',
  styles: ``,
})
export class RowComponent {
  readonly imageIcon = Image;
  readonly infoIcon = Info;

  @Input() country!: Country;
}
