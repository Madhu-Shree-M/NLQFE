import { Component, OnInit } from '@angular/core';
import { Mobile } from '../../models/mobile';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUIComponent implements OnInit {
  searchText:string='';
  constructor(private _mobileService:MobileService) { }
  mobiles:Mobile[]=[];
  // noData:boolean=false;
  ngOnInit(): void {
  }
  search=(text:string)=>{
    this._mobileService.getByCustomQuery(text).subscribe({
      next:(data)=>{
        if(data){
        this.mobiles=data;
        }
        // else{
        //     this.noData=true;
        // }
        // console.log(this.noData);

      }
        });
  }

}
