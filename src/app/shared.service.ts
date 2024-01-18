import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {
   }
   
   private url = 'hhtp://127.0.0.1:4200/';

   heros :any[] = [];


   createNewHero(hero: any){
    return this.http.post(this.url + '/hero/ajout', hero)

   }

}
