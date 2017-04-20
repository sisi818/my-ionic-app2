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
      {id:11, index:1, date:"2017.04.01", weekDay:"Mon", weather:"male", avatar:"assets/img/2-0.png", isHere:true},
      {id:2, index:2, date:"2017.04.02", weekDay:"Tue", weather:"female", avatar:"assets/img/2-1.png", isHere:false},
      {id:3, index:3, date:"2017.04.03", weekDay:"Wen", weather:"male", avatar:"assets/img/2-2.png", isHere:true},
      {id:4, index:4, date:"2017.04.04", weekDay:"Thu", weather:"female", avatar:"assets/img/2-4.png", isHere:false},
      {id:55,index:5,  date:"2017.04.05", weekDay:"Fri", weather:"male", avatar:"assets/img/2-6.png", isHere:true},
      {id:6, index:6, date:"2017.04.06", weekDay:"Sat", weather:"male", avatar:"assets/img/2-8.png", isHere:true},
      {id:7, index:7, date:"2017.04.07", weekDay:"Sun", weather:"male", avatar:"assets/img/1-4.png", isHere:true}
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
          this.members.sort(function(a,b){return a.index-b.index});
          break;
        case 2:
          this.members.sort(function(a,b){return b.index-a.index});
          break;
        case 3:
          this.members.sort(function(a,b){return Math.random()*1000*a.id - Math.random()*2000*b.id});
          break;
        default:
          break;
     }
  }
  

}
