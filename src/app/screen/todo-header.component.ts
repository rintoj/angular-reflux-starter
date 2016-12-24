import { AddTodoAction } from '../state/action';
import { Component } from '@angular/core';

@Component({
    selector: 'todo-header',
    template: `
        <form (submit)="addTodo()">
            <input type="text" name="todo" [(ngModel)]="todoText">
            <button type="submit">Add</button>
        </form>
    `
})
export class TodoHeaderComponent {

    protected todoText: string;

    addTodo() {
        if (this.todoText == undefined || this.todoText.trim() === '') return;
        new AddTodoAction({
            title: this.todoText,
            completed: false
        }).dispatch();
    }

}