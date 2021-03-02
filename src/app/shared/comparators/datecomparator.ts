import { ClrDatagridComparatorInterface } from '@clr/angular';

export class DateComparator implements ClrDatagridComparatorInterface<Date> {
// tslint:disable-next-line: prefer-function-over-method
    compare(a: Date, b: Date): number {
        return a.getTime() - b.getTime();
    }
  }
