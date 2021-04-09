import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayHelloComponent } from './say-hello/say-hello.component';


const routes: Routes = [
  { path: 'say-hello', component: SayHelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
