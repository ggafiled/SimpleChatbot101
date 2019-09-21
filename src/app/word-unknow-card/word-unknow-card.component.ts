import { Component, OnInit ,Input} from '@angular/core';
import {UnknowWordService} from '../service/unknow-word.service';
import {UnknowWordModel} from '../model/UnknowWordModel';

@Component({
  selector: 'app-word-unknow-card',
  templateUrl: './word-unknow-card.component.html',
  styleUrls: ['./word-unknow-card.component.css']
})
export class WordUnknowCardComponent implements OnInit {
  
  @Input('word') word:any;
  isHide:boolean = false;
  constructor(private unknowword:UnknowWordService) { }

  ngOnInit() {
    console.log(this.isHide);
  }

  updateToAdd(model:UnknowWordModel){
    this.unknowword.update(model).subscribe(doc=>{
      close();
    });
  }

  close(){
    this.isHide = true;
  }

}
