export interface AccountItem {
  name: string;
  id: string;
  status: string;
}

export const ACCOUNTS_MOCK: AccountItem[] = [
  {
    name: 'Bankers Guarantee',
    id: '312322322',
    status: 'Awaiting Approval'
  },
  {
    name: 'Payments',
    id: '312322322',
    status: 'Awaiting Approval'
  },
  {
    name: 'Loan Drawdown',
    id: '312322322',
    status: 'Awaiting Approval'
  }
];
