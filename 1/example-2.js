import { Temporal } from 'temporal-polyfill'

/* Example 2: Birthday in 2030 */

const birthday = Temporal.PlainMonthDay.from('12-15');
const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });

console.log('Example 2', {
  expected: '2030-12-15',
  actual: birthdayIn2030.toString()
});

