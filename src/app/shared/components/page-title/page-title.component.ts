import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
  @Input() pageTitle: string = 'pageTitle';

  @Input() addBtnText: string = 'addBtnText';

  @Input() addBtnRouterLink: string = './';
}
