export interface QuickAccessItem {
  icon: string;
  label: string;
}

export const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  { icon: 'payments', label: 'Initiate Payment' },
  { icon: 'sync_alt', label: 'Initiate Fund Transfer' },
  { icon: 'description', label: 'Initiate Import LC' },
  { icon: 'receipt_long', label: 'Initiate Invoice Repayment' },
  { icon: 'account_balance_wallet', label: 'Initiate Drawdown' },
  { icon: 'collections', label: 'View Collection' },
  { icon: 'account_balance', label: 'Account Summary' },
  { icon: 'history', label: 'Transaction History' },
  { icon: 'assessment', label: 'Reports' },
  { icon: 'verified_user', label: 'KYC Status' },
  { icon: 'support_agent', label: 'Support' },
  { icon: 'settings', label: 'Settings' }
];
