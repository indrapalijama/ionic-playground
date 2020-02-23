import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  email;

  constructor(
    private authenticationService: AuthenticationService,
    private storage: Storage
  ) { }

  ngOnInit() {
    console.log('localstorage', this.storage.get('USER_INFO'));
    this.storage.get('USER_INFO').then((response) => {
      this.email = response.EMAIL;
    });
  }

  doLogout() {
    this.authenticationService.logout();
  }

}
