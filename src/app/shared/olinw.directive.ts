import { Directive, HostListener, Input } from '@angular/core';

// tslint:disable-next-line: no-any
function getWindow(): any {
    return window;
}

@Directive({ selector: '[appOlinw]' })
export class OpenLinkInNewWindowDirective {
    // @Input('olinwLink') link: string; //intro a new attribute, if independent from routerLink
    @Input() link: string;
    constructor() {
    }
// tslint:disable-next-line: no-unsafe-any
    @HostListener('mousedown') onMouseEnter(): void {
// tslint:disable-next-line: no-unsafe-any
        getWindow()
            .open(this.link !== null ? this.link : '');
    }
}
