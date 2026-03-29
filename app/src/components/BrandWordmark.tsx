interface BrandWordmarkProps {
  compact?: boolean;
}

export default function BrandWordmark({ compact = false }: BrandWordmarkProps) {
  return <span className={compact ? "brand-wordmark compact" : "brand-wordmark"}>Ovixe</span>;
}
