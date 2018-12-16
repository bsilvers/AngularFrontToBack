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
  enableAdd: boolean = true;
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
          },
          image: 'http://lorempixel.com/600/600/people/3'
      },
      {
        firstName: 'Kevin',
        lastName:  'Neelin',
        age: 34,
        address: {
            street: '20 School St.',
            city: 'Lynn',
            state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/2'
    },
    {
      firstName: 'Karen',
      lastName:  'Williams',
      age: 26,
      address: {
          street: '55 Mill St.',
          city: 'Miami',
          state: 'FL'
      },
      image: 'http://lorempixel.com/600/600/people/1'
  }
      ];
      this.loaded = true;


    
    
   // this.showExtended = false;

    // this.addUser({
    //   firstName: 'David',
    //   lastName:  'Jackson' //,
    //   // age: 44,
    //   // address: {
    //   //     street: '12 Wake St.',
    //   //     city: 'Miami',
    //   //     state: 'FL'
    //  // }
    // });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
