import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name = '[name]';
  @Input() description = '[description]';
  @Input() src = '[src]';


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    console.log("trying to open");

    const currentModalReference = this.modalService.open(CardModalContent, { size: 'lg' });
    currentModalReference.componentInstance.name = this.name;
    currentModalReference.componentInstance.description = this.description;
  }
}

@Component({
  selector: 'card-modal-content',
  template: `
  <div class="modal-header" style="opacity: 100 !important;">
  <h4 class="modal-title">{{name}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>{{description}}</p>
</div>
  `
})
export class CardModalContent {
  @Input() name;
  @Input() description;

  constructor(public activeModal: NgbActiveModal) { }
}