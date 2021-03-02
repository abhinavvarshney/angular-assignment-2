import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user-service.service';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { DataModalComponent } from './modals/data-modal/data-modal.component';



@NgModule({
  declarations: [CreateUserComponent, ViewUserComponent, DataModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  providers:[UserService]
})
export class UsersModule { }
