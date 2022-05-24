/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic6clone apps Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEdit() {
    this.router.navigate(['edit-account']);
  }
  goToAddress() {
    this.router.navigate(['address']);
  }
  goToFavourites() {
    this.router.navigate(['favourites']);
  }
  goToOffer() {
    this.router.navigate(['offer']);
  }
  goToSetting() {
    this.router.navigate(['setting']);
  }
  goToRefund() {
    this.router.navigate(['refund']);
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }
  goToHelp() {
    this.router.navigate(['help']);
  }
  goToOrder() {
    this.router.navigate(['order-detail']);
  }


}
