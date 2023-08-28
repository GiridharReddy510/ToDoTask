import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskUserComponent } from './task-user/task-user.component';
import { ShowUserComponent } from './task-user/show-user/show-user.component';
import { AddEditUserComponent } from './task-user/add-edit-user/add-edit-user.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { ShowTaskComponent } from './todotask/show-task/show-task.component';
import { AddEditTaskComponent } from './todotask/add-edit-task/add-edit-task.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TaskUserComponent,
    ShowUserComponent,
    AddEditUserComponent,
    TodotaskComponent,
    ShowTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
