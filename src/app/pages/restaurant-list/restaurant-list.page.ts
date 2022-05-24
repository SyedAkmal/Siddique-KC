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
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {


  slideOpts = {
    slidesPerView: 1.5,
    speed: 400,
    spaceBetween: 15,

    }

    constructor(
      private router: Router,
      private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToAddress() {
    this.router.navigate(['address'])
  }
  goToRestaurant() {
    this.router.navigate(['restaurant'])
  }
  goToOffer() {
    this.router.navigate(['offer'])
  }

  goToFilter() {
    this.router.navigate(['filter-modal'])
  }

}
