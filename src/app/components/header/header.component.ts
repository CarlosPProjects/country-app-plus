import { Component } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBoxComponent, TabsComponent],
  templateUrl: './header.component.html',
  styles: '',
})
export class HeaderComponent {}
