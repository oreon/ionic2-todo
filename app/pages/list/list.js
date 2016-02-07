import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../additem/additem';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../../data/data';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(nav:NavController, dataService:DataService) {

    this.nav = nav;
    this.dataService = dataService;

    this.items = [
      {title:'hi':descritpion:'how are u '},
      {title:'hi there':descritpion:'how are u '},
      {title:'hi os':descritpion:'how are u '},
      {title:'hi chris':descritpion:'how are u '},
    ]

    this.dataService.getData().then((todos)=>{
      //this.items = JSON.parse(todos) || [];
    });

  }

  addItem(){
    this.nav.push(AddItemPage, {listPage: this})
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {item: item})
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.saveData(item);
  }
}
