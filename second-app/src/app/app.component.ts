import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test7SecondComponent } from './test7-second/test7-second.component';
import { Test8Component } from './test8/test8.component';

// bu component kendi icindeki html, css dosyalarini cagirir
// bu root component olan app component icine diger child componentler import edilir(imports: [Test7SecondComponent, Test8Component])
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test7SecondComponent, Test8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'second-app';
}
