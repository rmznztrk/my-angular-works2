import { Component } from '@angular/core';

//* PROPERTY BINDING


@Component({
  selector: 'app-test7-second',
  standalone: true,
  imports: [],
  template: `
    <h1> {{name}} </h1>
    <h1> {{age}} </h1>
    <br/>
    <h3 [innerText] = name >  </h3>
    <h3 [innerHTML] = name >  </h3>
    <br/>
    <input type='text' [value]= name+age/>
    <br/>
  `,

  /**Asagidaki Class Component icindeki degerleri yukaridaki html kodu icinde kullanmak icin:
   * atamak istedigimiz property koseli parantezler icine yazilir ve class icindeki degerin(degiskenin) direkt ismi yazilarak atanir  
   * buna PROPERTY BINDING denir.
   * Eger koseli parantezler olmadan atasaydik o sadece ilgili html elementinin property si olurdu
  */

  styleUrl: './test7-second.component.scss'
})
export class Test7SecondComponent {
  
  name : string = "Percorist";
  age = 15;

}
