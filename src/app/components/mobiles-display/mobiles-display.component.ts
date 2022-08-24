import { Component, Input, OnInit } from '@angular/core';
import { Mobile } from 'src/app/models/mobile';

@Component({
  selector: 'app-mobiles-display',
  templateUrl: './mobiles-display.component.html',
  styleUrls: ['./mobiles-display.component.css']
})
export class MobilesDisplayComponent implements OnInit {
  @Input() mobiles:Mobile[]=[];
  // @Input() data:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
