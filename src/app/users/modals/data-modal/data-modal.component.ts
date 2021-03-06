import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.css']
})
export class DataModalComponent implements OnInit {

  @Input() fromParent:any;

  constructor(public activeModal:NgbActiveModal,
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this.fromParent);
  }

  closeModal() {
    this.activeModal.close();
  }
  saveData(){
    this.userService.saveFormValues(this.fromParent);
    this.activeModal.close();
    this.router.navigateByUrl('users/view');
  }
}
