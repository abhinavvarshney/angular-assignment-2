import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveFormValues(values:object){
    let users:any = window.localStorage.getItem('users')
    if(users){
        users = JSON.parse(users);
        window.localStorage.setItem('users',JSON.stringify([...users,values]))  
    }else{
      window.localStorage.setItem('users',JSON.stringify([values]))
    }
  }

  getAllUsers():any{
    return JSON.parse(JSON.stringify(window.localStorage.getItem('users')));
  }
}
