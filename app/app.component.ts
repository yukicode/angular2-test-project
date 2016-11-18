import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h2>My Heroes</h2>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
}