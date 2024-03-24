import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterModule  //app.routes.ts, app.config.ts ve main.ts de yaptigimiz Router yapisinin bu componente eklenmesi icin RouterModule i import ettik
  ],   
  template: `
    <h1>Routing</h1>
    <a routerLink="/c1"> C1 Component </a> ||
    <a routerLink="/c2"> C2 Component </a> ||
    <a routerLink="/c3"> C3 Component </a>
    <router-outlet> </router-outlet> <!--hedef(gidilen) component outlet icine yerlestirilir-->
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routing-app';
}


// href yerine routerLink kullandik cunku spa(single page application) mantiginda sayfa yenilenmesi istenmeyen bir olaydir
//bu nedenle sayfayi yenilemeden componentleri getirmeyi routerLink ile yapariz