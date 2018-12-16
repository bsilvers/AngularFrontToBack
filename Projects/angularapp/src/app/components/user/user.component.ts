import { Component } from '@angular/core';

@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']    
})

export class UserComponent {
    firstName: string;
    lastName: string;
    age: number;
    address;
    hasKids: boolean;
    foo: any;
    numberArray: number[];
    stringArray: string[];

    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    // Methods
    constructor() {
       this.firstName = 'John';
       this.lastName = 'Doe';
       this.age = 30;

       this.address =  {
        street: '50 Main street',
        city: 'Boston',
        state: 'MA'
    }
        this.foo = true;
        this.hasKids = true;
        this.numberArray = [1,2,3];
        this.stringArray = ['Hello', 'World']
        this.myTuple = ['hello', 1 , true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;
    }
    
    showAge() {
        return this.age;
    }
}