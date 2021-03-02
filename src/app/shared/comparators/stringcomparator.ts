import { ClrDatagridComparatorInterface } from '@clr/angular';

export class StringComparator implements ClrDatagridComparatorInterface<string> {
// tslint:disable-next-line: prefer-function-over-method
    compare(a: string, b: string): number {
        return a.localeCompare(b);
    }
  }
