import { Injectable } from '@angular/core';
import { Message } from './models/message.model';


@Injectable({
  providedIn: 'root'
})

export class MessageService {
 private messages = new Array<Message>();

  getMessage() : Promise<Array<Message>>
  {
    return Promise.resolve(this.messages);
  }

  addMessage(msg: string,type:string = "success"){

    Promise.resolve(
      this.getMessage().then((msgs : Message[])=>{
        let msgO =new Message(msg,type);
        msgs.push(msgO);
        setTimeout(() => {
          this.delMessage(msgO);
        }, 5000);
          
      }));

  }

  delMessage(msg: Message){

    Promise.resolve(this.messages.splice(this.messages.indexOf(msg),1));
  }



}
