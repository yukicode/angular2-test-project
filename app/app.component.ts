import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h2>My Heroes</h2>
    <nav>
        <a routerLink="/heroes">Heroes</a>
        <a routerLink="/dashboard">Dash</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css'],
})

export class AppComponent {
    title = 'Tour of Heroes';
}