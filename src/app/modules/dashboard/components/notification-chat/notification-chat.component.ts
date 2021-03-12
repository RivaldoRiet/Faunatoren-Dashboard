import { Component, OnInit } from '@angular/core';
import { Notificatie } from 'src/app/shared/models/notificatie';

@Component({
  selector: 'app-notification-chat',
  templateUrl: './notification-chat.component.html',
  styleUrls: ['./notification-chat.component.scss']
})
export class NotificationChatComponent implements OnInit {
  public notificatielist: Notificatie[];
  stringJson: any;
  stringObject: any;
  notificatieObjects: Notificatie[] = [];

  constructor() { }

  ngOnInit(): void {
    this.chatData.forEach(element => {
      element.notificaties.forEach(ele => {
        this.notificatieObjects.push(Notificatie.deserialize(ele.time, ele.text));
      });
    });

    console.log("finaal object -", this.notificatieObjects);
  }


  chatData = [{
    "notificaties": [
      {
        "time": 56,
        "text": "Er is een Huismus aanwezig in faunatoren 1"
      },
      {
        "time": 54,
        "text": "Er is een Zwaluw aanwezig in faunatoren 2"
      },
      {
        "time": 51,
        "text": "Een Spreeuw is aan het broeden in faunatoren 3"
      },
      {
        "time": 49,
        "text": "Er is een Zwaluw aanwezig in faunatoren 1"
      },
    ]
  }];

}
