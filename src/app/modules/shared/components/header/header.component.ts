import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string = '';
  name: string;
  constructor(private search: SearchService,
              private storage: StorageService) { }

  ngOnInit(): void {
    this.name = `${this.storage.getUserData().firstName} ${this.storage.getUserData().lastName}`;
  }

  buscar() {
    console.log('header', this.query);

    this.search.search.emit(this.query);
  }

  logout() {
    this.storage.logout();
  }
}
