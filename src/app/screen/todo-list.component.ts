import { RemoveTodoAction, ToggleTodoAction } from '../state/action';

import { BindData } from 'angular-reflux';
import { Component } from '@angular/core';
import { State } from '../state';
import { Todo } from '../state/todo';

@Component({
    selector: 'todo-list',
    template: `
        <div class="todo" *ngFor="let todo of todos">
            <input type="checkbox" [checked]="todo?.completed" (click)="toggleTodo(todo)">
            <span class="text">{{todo.title}}</span>
            <button class="remove" (click)="removeTodo($event, todo)">Remove</button>
        </div>
    `
})
export class TodoListComponent {

    @BindData((state: State) => state.todos)
    protected todos: Todo[];

    toggleTodo(todo: Todo) {
        new ToggleTodoAction(todo.id).dispatch();
    }

    removeTodo(event, todo: Todo) {
        event.stopPropagation();
        new RemoveTodoAction(todo.id).dispatch();
    }
}