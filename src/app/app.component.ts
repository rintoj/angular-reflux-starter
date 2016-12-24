import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FetchTodosAction } from './state/action';
import { Stores } from './store';

@Component({
    selector: 'app-root',
    template: `
        <todo-header></todo-header>
        <todo-list></todo-list>
    `,
    styles: [
        require('./app.component.scss')
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    constructor(public stores: Stores) { }

    ngOnInit() {
        new FetchTodosAction().dispatch();
    }
}