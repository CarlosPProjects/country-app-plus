import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
}
