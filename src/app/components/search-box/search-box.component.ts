import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';
import { SearchService } from '../services/search-box.service';

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

  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private searchService: SearchService) {}

  clearSearchInput() {
    this._inputValue = '';
    this.searchService.setSearchValue('');
  }

  search(value: string) {
    this.searchService.setSearchValue(value);
  }
}
