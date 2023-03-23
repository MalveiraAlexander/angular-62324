import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { GifResponse } from 'src/app/models/gif.response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inyeccion-dos',
  templateUrl: './inyeccion-dos.component.html',
  styleUrls: ['./inyeccion-dos.component.scss']
})
export class InyeccionDosComponent implements OnInit {

  loading: boolean = false;
  data: GifResponse;
  dataString: string;

  options: AnimationOptions = {
    path: '../../../assets/lottie/loading.json',
  };

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
        this.save(this.data.data.images.original.url);
        setTimeout(() => {
          this.loading = false;
        }, 2500);
      }
    });
    this.dataString = this.dataService.getData();
  }

  save(url: string) {
    this.dataService.setData(url);
  }
}
