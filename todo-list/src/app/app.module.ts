import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {InputButtonComponent} from './input-button/input-button.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TodoListService} from './services/todo-list.service';
import {InplaceModule} from 'primeng/inplace';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputButtonComponent,
    ListManagerComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    InplaceModule

  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
