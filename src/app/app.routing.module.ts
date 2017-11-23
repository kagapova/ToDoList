import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {UserListComponent} from "./user-list/user-list.component";


const routes: Routes = [


  {path: '**', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
