import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo-list';
  todoList: TodoItem[] = [];

  constructor(private tlService: TodoListService) {
  }

  ngOnInit(): void {
    this.todoList = this.tlService.getTodoList();
  }

  addItem(title: any): void {
    this.tlService.addItem({title});
  }

  removeItem(item): void {
    this.tlService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.tlService.updateItem(item, changes);
  }
}
