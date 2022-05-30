import { Temporal } from 'temporal-polyfill'

/* Example 1: Noon on a particular date */

const date = Temporal.PlainDate.from('2020-05-14');
const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

console.log('Example 1', {
  expected: '2020-05-14T12:00:00',
  actual: noonOnDate.toString()
});
