import { LimitItem } from '../models';

export const LIMITS: LimitItem[] = [
  { label: 'Overdraft (AED)', available: 60, utilized: 40 },
  { label: 'Overdraft (EUR)', available: 70, utilized: 30 },
  { label: 'Credit Line (AED)', available: 50, utilized: 50 },
  { label: 'Credit Line (USD)', available: 65, utilized: 35 }
];
