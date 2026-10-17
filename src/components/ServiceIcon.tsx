import {
  Building2,
  Sparkles,
  Sun,
  Layers,
  Stethoscope,
  GraduationCap,
  Warehouse,
  Store,
  Wrench,
  Truck,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Building2,
  Sparkles,
  Sun,
  Layers,
  Stethoscope,
  GraduationCap,
  Warehouse,
  Store,
  Wrench,
  Truck,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon className={className} />;
}
