
import {HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collection = [];
  title = 'HelloWorld';
  apiData:any[]=[];
  apiDataSearch:any[]=[];
  p: number = 1;
  count: number = 20;
  constructor(private http:APIService){}
 
  ngOnInit(){
    this.http.getProductData().subscribe((data:any)=>{
      this.apiData=(JSON.parse(JSON.stringify(data.entries)));
      this.apiDataSearch=(JSON.parse(JSON.stringify(data.entries)));
       
    })

  }

  search(e:any){
    let filterValueLower=e.target.value.toLowerCase();
    if(e === ""){
      this.apiData=this.apiDataSearch;
    }
    else{
      this.apiData= this.apiDataSearch.filter((test)=>test.Link.includes(filterValueLower));
    }
  }
  
}
