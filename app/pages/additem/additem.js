import {Page, NavController, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/additem/additem.html'
})
export class AddItemPage {
  constructor(nav:NavController, navParams:NavParams) {

    this.nav = nav;
    this.navParams = navParams;

    this.title ="";
    this.descritpion="";

  }

  saveItem(){
    let newItem = {
      title:this.title,
      descritpion:this.descritpion
    }
    this.navParams.get('listPage').saveItem(newItem);
    this.nav.pop();
  }
}
