import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskUserComponent } from './task-user/task-user.component';
import { TodotaskComponent } from './todotask/todotask.component';


const routes: Routes = [
  {path:'taskUser', component:TaskUserComponent},
  {path:'task',component:TodotaskComponent}

];

@NgModule({
  imports: [   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
