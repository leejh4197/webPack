import { styleLog, test, currency, numberWithComma } from './utils/index.js';

styleLog(
  'μλ! μΉν© π',
  `
    font-size: 4rem;
    font-weight: bold;
  `
);

let price = 89_000;

test(currency(price) === `${numberWithComma(price)}μ`);
