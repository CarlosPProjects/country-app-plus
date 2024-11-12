import { Component } from '@angular/core';
import { LucideAngularModule, Image, Info } from 'lucide-angular';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './row.component.html',
  styles: ``,
})
export class RowComponent {
  readonly imageIcon = Image;
  readonly infoIcon = Info;
}
