import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule, ShieldQuestion } from 'lucide-angular';
import { RowSkeletonComponent } from '../row-skeleton/row-skeleton.component';
import { RowComponent } from '../row/row.component';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LucideAngularModule, RowSkeletonComponent, RowComponent],
  templateUrl: './table.component.html',
})
export class TableComponent{
  readonly shieldQuestionIcon = ShieldQuestion;

  @Input() public countries: Country[] = [];
  @Input() public loading: boolean = true;

}
