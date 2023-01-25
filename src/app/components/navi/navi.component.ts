import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {
  findex:number = 300;

  tokenn(){
    if (localStorage.length>0) {
      return true;
    }else{
      return false;
    }
  }
}
