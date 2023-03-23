import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  query: string = '';
  constructor(private search: SearchService) { }

  buscar() {
    console.log('header', this.query);

    this.search.search.emit(this.query);
  }
}
