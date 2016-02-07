import {Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{

  constructor(){
    this.storage = new SqlStorage({name:'todoApp'});
    this.data = null;

    this.storage.get('todoApp').then((todos)=>{
      this.data = JSON.parse(todos);
    });
  }

  getData(){
    return this.storage.get('todoApp');
  }

  saveData(item){
    if(!this.data){
      this.data = [item];
      let newdata = JSON.stringify(item);
      this.storage.set('todoApp', newdata);
    }else{
      this.data.push(item);
      let newdata = JSON.stringify(this.data);
      this.storage.set('todoApp', newdata);
    }

  }

}
