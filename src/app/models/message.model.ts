export class Message{
    public message : string;
    public type : string;

    constructor(_message:string,_type:string){
        this.message = _message;
        this.type = _type;
    }
}