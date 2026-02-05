export interface AccountBalance {
    type: string;
    accNo: string;
    currency: string;
    amount: number;
  }
  
  export const ACCOUNT_BALANCES_MOCK: AccountBalance[] = [
    {
      type: 'Expense',
      accNo: '3212232322',
      currency: 'USD',
      amount: 3000000
    },
    {
      type: 'Current',
      accNo: '3212232322',
      currency: 'EUR',
      amount: 2000000
    },
    {
      type: 'Commission',
      accNo: '3212232322',
      currency: 'INR',
      amount: 1000000
    },
    {
      type: 'Expense',
      accNo: '3212232322',
      currency: 'USD',
      amount: 3000000
    },
    {
      type: 'Current',
      accNo: '3212232322',
      currency: 'EUR',
      amount: 2000000
    },
    {
      type: 'Commission',
      accNo: '3212232322',
      currency: 'INR',
      amount: 1000000
    }
  ];
  