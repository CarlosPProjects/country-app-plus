import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '../../countries/interfaces/country';
import { SearchService } from '../services/search-box.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabs.component.html',
  styles: '',
})
export class TabsComponent {
  private countries: Country[] = [];

  constructor(private searchService: SearchService) {}
}
