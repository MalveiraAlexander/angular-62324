import { GifResponse } from './../../models/gif.response';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inyeccion',
  templateUrl: './inyeccion.component.html',
  styleUrls: ['./inyeccion.component.scss']
})
export class InyeccionComponent implements OnInit {

  loading: boolean = false;
  data: GifResponse;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getRandomGif().subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response;
      },
      error: (error: any) => {
        console.log(error);
        alert('Error no tienes permisos');
      },
      complete: () => {
        console.log('Complete');
        console.log('Com', this.data);
        this.loading = false;
      }
    });

  }

}
