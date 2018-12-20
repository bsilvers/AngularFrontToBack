import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''

  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userform') form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.users = this.dataService.getUsers();
    
    this.loaded = true;
  }


  
  toggleHide(user: User){    
    user.hide = !user.hide;
  }
  
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);

      this.form.reset();
    }

    
  }

 
}
