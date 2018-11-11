import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoryComponent} from './history/history.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   {
  path: 'login',
  component: LoginComponent,
},

{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'dashbord',
  component: DashbordComponent,
  canActivate : [AuthGuard]
},

{
  path: 'history',
  component: HistoryComponent,
  canActivate : [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
