import { Component, OnInit } from '@angular/core';
import { StorageService } from './modules/shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clase5';

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.storage.setCookie();
  }
}
