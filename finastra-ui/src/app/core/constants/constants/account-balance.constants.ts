import { AccountBalanceItem } from '../models';

export const ACCOUNT_BALANCES: AccountBalanceItem[] = [
  { type: 'Expense', accountNo: '3212232322', currency: 'USD', amount: 3000000 },
  { type: 'Current', accountNo: '3212232322', currency: 'EUR', amount: 2000000 },
  { type: 'Commission', accountNo: '3212232322', currency: 'INR', amount: 1000000 }
];
