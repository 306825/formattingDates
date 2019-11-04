 const moment = require('moment');

const m1 = moment(new Date('2019/06/01 2:04:03'));
const m2 = m1.clone().add(59, 'seconds');

const duration = moment.duration(m1.diff(m2));
duration.seconds(); // 59
duration.milliseconds(); // 59000

duration.humanize(); // 'a minute'
duration.humanize(true); // 'in a minute'

console.log(moment.duration(m2.diff(m1)).humanize(true)); // 'a minute ago'
