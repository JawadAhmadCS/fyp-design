import type { ScreenOption } from "../../types";

interface ScreenSwitcherProps {
  options: ScreenOption[];
  value: ScreenOption["key"];
  onChange: (next: ScreenOption["key"]) => void;
}

export function ScreenSwitcher({ options, value, onChange }: ScreenSwitcherProps) {
  return (
    <div className="screen-switcher" role="tablist" aria-label="Design views">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          className={option.key === value ? "active" : ""}
          onClick={() => onChange(option.key)}
          role="tab"
          aria-selected={option.key === value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
