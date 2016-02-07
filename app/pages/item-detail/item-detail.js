
import {Page, NavController, NavParams} from 'ionic/ionic';
import {AddItemPage} from '../additem/additem';


@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html'
})
export class ItemDetailPage {
  constructor(nav:NavController, navParams:NavParams) {

    this.nav = nav;
    this.navParams = navParams
    this.item = navParams.get('item')

    this.one = "AAS"

  }

  addItem(){
    this.nav.push(AddItemPage, {listPage: this})
  }
}
