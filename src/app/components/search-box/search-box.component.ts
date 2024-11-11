import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  readonly SearchIcon = Search;
}
