import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  data:any;
  page = 1;
  pageSize=10;

  ngOnInit(): void {
    this.data=JSON.parse(this.userService.getAllUsers());
  }

}
