import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server created';
  serverName: string = '';
  serverCreated:boolean = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = false;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server wes created';
  }

  updateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
