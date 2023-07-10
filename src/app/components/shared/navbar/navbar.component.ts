import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   {
 
  filtro:string="";
  constructor( private _heroesService:HeroesService, private router:Router){
  }
  
  search(dato:string){
    this._heroesService.filtro=dato;
    console.log(this.filtro);
  }


  
}
