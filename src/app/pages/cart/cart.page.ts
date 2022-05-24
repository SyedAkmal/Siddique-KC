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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedId: number;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToRestaurant() {
    this.router.navigate(['restaurant']);
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }
  goToCoupon() {
    this.router.navigate(['coupons']);
  }

  changeId(size: number) {
    this.selectedId = size;
  }

}
