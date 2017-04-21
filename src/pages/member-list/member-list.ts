import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController} from 'ionic-angular';

/**
 * Generated class for the MemberList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {
  members: Array<any>
  sortFlag: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionCtrl: ActionSheetController) {
    this.members=[
      {id:1, date:"2017.04.01", weekDay:"Mon", city:"北京", avatar:"assets/img/2-2.png", isHere:true},
      {id:2, date:"2017.04.02", weekDay:"Tue", city:"上海", avatar:"assets/img/2-0.png", isHere:false},
      {id:3, date:"2017.04.03", weekDay:"Wen", city:"大连", avatar:"assets/img/2-2.png", isHere:true},
      {id:4, date:"2017.04.04", weekDay:"Thu", city:"天津", avatar:"assets/img/2-8.png", isHere:false},
      {id:5,  date:"2017.04.05", weekDay:"Fri", city:"兰州", avatar:"assets/img/2-6.png", isHere:true},
      {id:6, date:"2017.04.06", weekDay:"Sat", city:"哈尔滨", avatar:"assets/img/2-4.png", isHere:true},
      {id:7, date:"2017.04.07", weekDay:"Sun", city:"长沙", avatar:"assets/img/1-6.png", isHere:true}
    ];
    this.sortFlag = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

  sortList(sortType){
    switch(sortType)
    {
        case 1:
          this.members.sort(function(a,b){return a.id-b.id});
          break;
        case 2:
          this.members.sort(function(a,b){return b.id-a.id});
          break;
        case 3:
          this.members.sort(function(a,b){return Math.random()*1000*a.id - Math.random()*2000*b.id});
          break;
        default:
          break;
     }
  }
  

}
