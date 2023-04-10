import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'I love angular';

  msgForChild: string = "Work Hard,Party Hard";
  msgFromChild ! : string;
  productStatus!: string
  // msginfo: string = "I love ts ";
  // infos: string = "I love typescript"
  // information: number = 123445435;

  onMsgFromChild(e:any){
    console.log(e);
    this.msgFromChild = e
  }

  updateStatus(status : string){
    console.log(status)
    this.productStatus = status
  }

  // javascript : string = 'I love javascript';
  // sass: string = 'I love sass';
  // ts : string = 'I love ts';
  // flex : string = 'I love flex';
  // nodejs : string = 'I love nodejs';
  // java : string = 'I love java';
  // php : string = 'I love php';


}
