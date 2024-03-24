import { Component } from '@angular/core';


//* EVENT BINDING

@Component({
  selector: 'app-test8',
  standalone: true,
  imports: [],
  template: `
    <button (click)="metot1()"> Click Mee! </button>
  `,
  styleUrl: './test8.component.scss'
})

//EVENT BINDING yapmak icin click event i yay parantez icinde yazilir

export class Test8Component {

  metot1(){
    alert('Tiklandim!');
  }

}
