import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';

import { Client } from 'src/models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = true;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

}
