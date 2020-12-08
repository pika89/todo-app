import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  updateTitle(newTitle): void {
    this.item.title = newTitle;
  }

  updateItem(): void {
    this.update.emit({
      item: this.item,
      changes: {editable: !this.item.editable}
    });
  }
}