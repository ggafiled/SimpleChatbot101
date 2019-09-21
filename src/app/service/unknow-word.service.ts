import { Injectable } from '@angular/core';
import {UnknowWordModel} from '../model/UnknowWordModel';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UnknowWordService {

  url:string = "https://project-bot-01.herokuapp.com/bot/getwordunknow";
  selectedUser:UnknowWordModel = new UnknowWordModel;
  document:UnknowWordModel[];

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.url);
  }

  update(data:UnknowWordModel){
    return this.http.post(this.url+"/"+data._id,data);
  }
}


