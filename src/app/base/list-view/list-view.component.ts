import { Component, OnInit, Input } from '@angular/core';
import { ListView } from './listViewData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.pug',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = require(`./../../../settings/${this.configsSource}.json`);
    this.http.get(this.data.url).subscribe((res:any)=>{
      this.listItem = res;
    });
  }
  @Input()configsSource:string;
  data: ListView;
  listItem:any;

}
