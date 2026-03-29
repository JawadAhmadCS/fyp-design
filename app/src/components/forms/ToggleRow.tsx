interface ToggleRowProps {
  title: string;
  description: string;
  checked?: boolean;
}

export function ToggleRow({ title, description, checked = false }: ToggleRowProps) {
  return (
    <div className="toggle-row">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button className={checked ? "toggle-switch on" : "toggle-switch"} type="button" aria-pressed={checked}>
        <span />
      </button>
    </div>
  );
}
