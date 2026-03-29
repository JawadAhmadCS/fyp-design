import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  delta: string;
  Icon: LucideIcon;
}

export function SummaryCard({ title, value, delta, Icon }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <div className="summary-card-header">
        <div className="summary-icon">
          <Icon size={14} />
        </div>
        <span className="summary-delta">{delta}</span>
      </div>

      <div className="summary-card-content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </article>
  );
}
