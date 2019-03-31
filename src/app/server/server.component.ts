import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`h1{
        color: red;
    }`]
})
export class ServerComponent {
    id: number = 0;
    online: boolean = true;

    constructor() {
        this.id = (+Math.random().toFixed(2) *100).toFixed(0);
        this.online = Math.random() > 0.5 ? true : false;
    }

    getColor() {
        return this.online ? 'green' : 'red';
    }

}