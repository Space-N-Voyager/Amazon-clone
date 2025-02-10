import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { isWeekend as isSatSun } from './dayfunction.js';

const now = dayjs();

console.log(isSatSun(now));




