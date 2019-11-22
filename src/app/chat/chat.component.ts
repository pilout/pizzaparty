import { Component, Input, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-chat',
  templateUrl : 'chat.component.html'
})
export class ChatComponent implements OnInit {

  socket: SocketIOClient.Socket;
  messages : Array<object> = new Array<object>();
  msgCurrent: string;
  name: string



  ngOnInit(): void {
    this.socket = io('http://localhost:4000');

  


    this.socket.on('message', (message: string) => {

      let name = message.substr(0,3);

      this.messages.push({msg:message,color:this.randColor(name)});

    });
  }



  constructor(private fb :AngularFireAuth) {

    


  }

  checkEnter(e){
    if(e.key =='Enter')
      this.send();
  }


  randColor(str : string) : string
  {
    let r =str.charCodeAt(0) *str.charCodeAt(2);
    let g =str.charCodeAt(1) *str.charCodeAt(0);
    let b =str.charCodeAt(2) *str.charCodeAt(1);


    r = r%255;
    g = g%255;
    b = b%255;

    return "rgb("+r+","+g+","+b+")";


  }
  
  
  send() {
  
    if(this.fb.auth.currentUser != null)
      this.name = this.fb.auth.currentUser.email;
    else
     this.name = this.socket.id.substr(0,3);


    this.socket.emit('message', this.name + ":" +this.msgCurrent);
    this.msgCurrent= "";
  }
}