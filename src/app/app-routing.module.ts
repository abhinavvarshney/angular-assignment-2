import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';


const routes: Routes = [
  {path:'users/create',component:CreateUserComponent},
  {path:'users/view',component:ViewUserComponent},
  {path:'',redirectTo:'users/create',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
