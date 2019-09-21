import { Component, OnInit,Input,OnChanges} from '@angular/core';
import {UnknowWordService} from '../service/unknow-word.service';
import {UnknowWordModel} from '../model/UnknowWordModel';
import * as soketIo from 'socket.io-client';
@Component({
  selector: 'app-word-unknow',
  templateUrl: './word-unknow.component.html',
  styleUrls: ['./word-unknow.component.css']
})
export class WordUnknowComponent implements OnInit {

  constructor(private appservice:UnknowWordService) { }
  
  
  ngOnInit() {
    this.getdataTomodels();
    const socket = soketIo("https://project-bot-01.herokuapp.com/bot/webhook:18814");
    socket.on("added",(data)=>{
      console.log("added");
      this.getdataTomodels();
    });
  }

  getdataTomodels(){
    this.appservice.get().subscribe(doc=>{
      this.appservice.document = doc as UnknowWordModel[];
    });
  }


}
