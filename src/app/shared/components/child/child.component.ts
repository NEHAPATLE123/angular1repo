import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

//------------- Input Output decorator -------------//

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html",
    styleUrls: ["./child.component.scss"]

})
export class ChildComponent implements OnInit {

 @Input() msgFromParent ! : string;
//  @Input()msgInformation ! : string;
//  @Input()infoProperty! : string;
//  @Input()infoTech!: number;

 msgfromChild = "I am front-end developer"
 @Output() getMsgFromChild: EventEmitter<string> = new EventEmitter<string>()

 onMsgSend(){
    this.getMsgFromChild.emit("I am front-end developer")
 }

    ngOnInit(): void {
    }

}