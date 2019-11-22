import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private messageservice : MessageService) { }
  messages : Message[];
  ngOnInit() {
     this.messageservice.getMessage().then(msgs=> this.messages = msgs);


  }

  removeMsg(msg :Message){
    this.messageservice.delMessage(msg);
  }

}
