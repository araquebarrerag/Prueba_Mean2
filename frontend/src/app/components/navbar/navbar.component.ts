import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from '../../shared/pais.service';
import { Pais } from '../../pais';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private paisservice: PaisService) {}

  ngOnInit(): void {}

  nuevoPais(event: any) {
    event.preventDefault();
    this.paisservice.setter(new Pais());
    this.router.navigate(['/crearActualizar']);
  }
}
