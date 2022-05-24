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
import { ModalController, NavController } from '@ionic/angular';
import { ItemModalPage } from '../item-modal/item-modal.page';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToCart() {
    this.router.navigate(['cart'])
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ItemModalPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data)

  }

}
