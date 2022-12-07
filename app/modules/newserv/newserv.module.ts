import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewservComponent } from './newserv.component';


@NgModule({
  declarations: [NewservComponent],
  imports: [
    CommonModule
  ], 
  exports : [NewservComponent]
})
export class NewservModule { }
