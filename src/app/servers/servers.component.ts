import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server created';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = false;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server wes created';
  }

}
