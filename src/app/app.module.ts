import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './taskList/taskList.component';
import {AppRoutingModule} from "./app.routing.module";
import {TaskService} from "./services/task.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
