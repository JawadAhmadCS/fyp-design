interface RadialMetricCardProps {
  title: string;
  value: string;
  unit: string;
}

export function RadialMetricCard({ title, value, unit }: RadialMetricCardProps) {
  return (
    <article className="radial-metric-card">
      <h3>{title}</h3>

      <div className="radial-meter-wrap">
        <div className="radial-meter" aria-hidden="true">
          <div className="radial-meter-hole" />
        </div>

        <div className="radial-value">
          <span className="metric-chip">{unit}</span>
          <strong>{value}</strong>
        </div>
      </div>
    </article>
  );
}
