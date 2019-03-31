import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`h1{
        color: red;
    }`]
})
export class ServerComponent {
    id:number =1;
    status:boolean = true;
}