import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ListViewComponent]
})
export class BaseModule { }
