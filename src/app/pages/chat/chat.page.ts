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
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  constructor(
    private NavCtrl: NavController
    ) {}

  ngOnInit() {}
  goToBack() {
    this.NavCtrl.back();
  }


  messages = [
    {
      side: 'left',
      msg: 'Hello',
    },
    {
      side: 'right',
      msg: 'Hii',
    },
    {
      side: 'left',
      msg: 'okay',
    },
    {
      side: 'right',
      msg: 'Hi, I am Sweety and i am here to assist you. Tell me what could you please elaborate issue?',
    },
    {
      side: 'left',
      msg: 'i dont understan how to use swiggy guid me for use this worst app.',
    },
    {
      side: 'right',
      msg: 'yes of course',
    },
    {
      side: 'left',
      msg: 'to use swiggy guid me for use this worst app.',
    },
    {
      side: 'right',
      msg: 'yes of course you can do this ',
    },
    {
      side: 'left',
      msg: 'to use swiggy guid me for use this worst app.',
    },
    {
      side: 'right',
      msg: 'yes of course you can do this ',
    },
    {
      side: 'left',
      msg: 'yes of course you can do this ',
    },
    {
      side: 'left',
      msg: 'okay',
    },
    {
      side: 'left',
      msg: 'okay',
    },
  ];
}
