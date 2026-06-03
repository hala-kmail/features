import { ShieldCheck, Sparkles, Activity } from 'lucide-react';
import ToothIcon from '../components/icons/ToothIcon';
import type { ComponentType } from 'react';

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export const serviceIcons: Record<number, IconComponent> = {
  1: ToothIcon,
  2: ShieldCheck,
  3: Sparkles,
  4: Activity,
  5: ToothIcon,
  6: Sparkles,
};

export { ToothIcon };
