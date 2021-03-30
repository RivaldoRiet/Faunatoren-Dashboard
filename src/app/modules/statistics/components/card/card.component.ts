import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: `
   <div class="card">
     <div class="title">{{title}}</div>
     <div class="description">
       <ng-content></ng-content>
     </div>
  </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /**
   * Title of the card
   */
  @Input() title: string;
}
