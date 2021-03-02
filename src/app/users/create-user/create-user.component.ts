import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModalComponent } from '../modals/data-modal/data-modal.component';
import { UserService } from '../user-service.service';
import { requiredFileType } from './custom-validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService,
    private modalService:NgbModal) { }

  techList : any = [
    {id:'c',name:'C'},
    {id:'cpp',name:'C++'},
    {id:'java',name:'Java'},
    {id:'python',name:'Python'},
    {id:'javscript',name:'Javascript'}
  ];

  namePattern = "^[a-zA-Z. ]*[a-zA-Z]{2,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = '^[6789][0-9]{9}';


  ngOnInit(): void {
  }

  userForm:FormGroup = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.min(2),Validators.max(30),Validators.pattern(this.namePattern)]),
      gender: new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      mobile : new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
      category : new FormControl('General',[Validators.required]),
      technology: new FormArray([],[Validators.required]),
      profilePicture : new FormControl(null,[])
  })

  onCheckBoxChange(e:any){
    const technology:FormArray = this.userForm.get('technology') as FormArray;
    if(e.target.checked) {
      technology.push(new FormControl(e.target.value))
    }else{
      const index = technology.controls.findIndex(x=>x.value===e.target.value);
      technology.removeAt(index);
    }
  }

  imageUpload(e:any){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {this.userForm.patchValue({'profilePicture':reader.result})
  console.log(reader.result);
  }
    reader.onerror = () => {return;}
  }

  openModal(){
    const modalRef = this.modalService.open(DataModalComponent,{
      scrollable:true,
      centered:true,
      backdrop:true,
      windowClass:'modal'
    })
    modalRef.componentInstance.fromParent = this.userForm.value;
    modalRef.result.then((result)=>{
      console.log("result",result);
    },(reason)=>{

    });
  }

}
