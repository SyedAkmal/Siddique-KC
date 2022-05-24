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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

   slideOpts = {
    slidesPerView: 1.2,

    }
  constructor(private router: Router) { }



  ngOnInit() {
  }

  goToOffer() {
    this.router.navigate(['offer']);
  }
  goToRestaurant() {
    this.router.navigate(['restaurant']);
  }
  goToList() {
    this.router.navigate(['restaurant-list']);
  }
  goToAddress() {
    this.router.navigate(['address']);
  }
  goToCategory() {
    this.router.navigate(['category']);
  }



}
