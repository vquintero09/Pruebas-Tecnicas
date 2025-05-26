import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from '@features/taskPage/task-page.component';

const routes: Routes = [
  { path: 'task', component: TaskPageComponent},
  { path: '', redirectTo: '/task', pathMatch: 'full'},
  { path: '**', redirectTo: '/task'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
