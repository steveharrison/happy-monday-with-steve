import { Temporal } from 'temporal-polyfill'

/* Example 3: Math + Timezone support */

const departure = Temporal.ZonedDateTime.from('2020-03-08T11:55:00+08:00[Asia/Hong_Kong]');

const flightTime = Temporal.Duration.from({ minutes: 775 });

const arrival = departure.add(flightTime).withTimeZone('America/Los_Angeles');

console.log('Example 3', {
  expected: '2020-03-08T09:50:00-07:00[America/Los_Angeles]',
  actual: arrival.toString()
});
