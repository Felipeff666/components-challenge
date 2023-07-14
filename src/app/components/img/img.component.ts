import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input()imgStyle:object={};
  @Input()imgValue:string='';
  imgDefaultValue:string='https://www.donbalon.com/images/venue_default.png';


}
