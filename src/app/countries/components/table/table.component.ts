import { Component } from '@angular/core';
import { LucideAngularModule, Image, Info } from 'lucide-angular';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  readonly imageIcon = Image;
  readonly infoIcon = Info;
}
