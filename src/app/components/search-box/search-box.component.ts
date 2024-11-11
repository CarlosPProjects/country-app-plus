import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  readonly SearchIcon = Search;

  public _inputValue: string = '';

  constructor() {}

  public clearSearchInput() {
    this._inputValue = '';
  }

  public search(): void {
    // TODO: Implement search logic
    console.log('search:', this._inputValue);
  }
}
