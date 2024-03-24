import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], //NGModel i kullanmak icin FormsModule import edilir
  template: `
    <h1>Kredi Hesaplama</h1>
    <div>
      <label>Kredi Tutari</label>
      <input [(ngModel)]="creditAmount"/>
    </div>
    <div>
      <select [(ngModel)]="installmentAmount">
        <option>1</option>
        <option>6</option>
        <option>12</option>
      </select>
    </div>
    <div>
      <button (click)="calculate()"> Hesapla </button>
    </div>
    <hr/>
    <div>
      <h4>Aylik Taksit Tutari {{monthlyInstallmentAmount}} </h4>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  creditAmount: number = 10000;
  installmentAmount: number = 6;
  monthlyInstallmentAmount: number = 0;

  calculate(){
    this.monthlyInstallmentAmount = 
        this.creditAmount / this.installmentAmount;
  }

}
