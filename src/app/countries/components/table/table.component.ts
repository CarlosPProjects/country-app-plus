import { Component, Input } from '@angular/core';
import {
  LucideAngularModule,
  Image,
  Info,
  ShieldQuestion,
} from 'lucide-angular';
import { RowSkeletonComponent } from '../row-skeleton/row-skeleton.component';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LucideAngularModule, RowSkeletonComponent, RowComponent],
  templateUrl: './table.component.html',
})
export class TableComponent {
  readonly shielQuestionIcon = ShieldQuestion;

  @Input() data: any[] = [];
  public loading: boolean = true;
}
