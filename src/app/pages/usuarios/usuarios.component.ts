import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  numero: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.numero = Number.parseInt(params.get('id'));
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params.get('name'));

    });
  }
}
