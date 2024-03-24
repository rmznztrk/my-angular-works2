import { Routes } from '@angular/router';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';

const routes: Routes = [
    {
      path: "c1",
      component: Routing1Component,
      title: 'C1 Title'
    },
    {
      path: "c2",
      component: Routing2Component ,
      title: 'C2 Title'
    },
    {
      path: "c3",
      component: Routing3Component ,
      title: 'C3 Title'
    }
  ]

  export default routes;