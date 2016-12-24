import { Action } from 'angular-reflux';
import { State } from './';
import { Todo } from './todo';

export class FetchTodosAction extends Action<State> { constructor() { super(); } }
export class AddTodoAction extends Action<State> { constructor(public todo: Todo) { super(); } }
export class UpdateTodoAction extends Action<State> { constructor(public todo: Todo) { super(); } }
export class ToggleTodoAction extends Action<State> { constructor(public id: string) { super(); } }
export class RemoveTodoAction extends Action<State> { constructor(public id: string) { super(); } }