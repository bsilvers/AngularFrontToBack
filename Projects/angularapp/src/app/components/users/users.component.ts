import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {

    
      this.users = [
        {
          firstName: 'John',
          lastName:  'Doe',
          age: 30,
          address: {
              street: '50 Main St.',
              city: 'Boston',
              state: 'MA'
          }
      },
      {
        firstName: 'Kevin',
        lastName:  'Neelin',
        age: 34,
        address: {
            street: '20 School St.',
            city: 'Lynn',
            state: 'MA'
        }
    },
    {
      firstName: 'Karen',
      lastName:  'Williams',
      age: 26,
      address: {
          street: '55 Mill St.',
          city: 'Miami',
          state: 'FL'
      }
  }
      ];
      this.loaded = true;


    
    
   // this.showExtended = false;

    this.addUser({
      firstName: 'David',
      lastName:  'Jackson' //,
      // age: 44,
      // address: {
      //     street: '12 Wake St.',
      //     city: 'Miami',
      //     state: 'FL'
     // }
    });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
