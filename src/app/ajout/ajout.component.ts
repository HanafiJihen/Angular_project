import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit {

  hero = {
    name: '',
    power: 0,
    imageUrl: ''
  }

  
  
  ajout(){
    this._shared.createNewHero(this.hero)
    .subscribe(
      res => {
        console.log(res);
      },

      err => {
        console.log(err);
      }

    );
  }


/*
    this.hero = {
      name: '',
      power: 0,
      imageUrl: ''
    }*/


 // console.log(this.heros);

  constructor(public _shared: SharedService){}

  ngOnInit(): void {
    
  }

}
