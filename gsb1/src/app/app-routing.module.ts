import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GestCompComponent } from './gest-comp/gest-comp.component';
import { AddCompComponent } from './add-comp/add-comp.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gest-comp',
    children:[
      { path: '', component: GestCompComponent},
      { path: 'add-comp/:id', component: AddCompComponent}
    ]
  },
  { path: 'gest-comp/:id',
    children:[
    { path: '', component: GestCompComponent},
    { path: 'add-comp/:id', component: AddCompComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
