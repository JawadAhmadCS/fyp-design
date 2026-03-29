import { ChevronDown } from "lucide-react";

interface SelectFieldProps {
  label: string;
  value: string;
  wide?: boolean;
}

export function SelectField({ label, value, wide = false }: SelectFieldProps) {
  return (
    <label className={wide ? "field-block wide" : "field-block"}>
      <span>{label}</span>
      <button type="button" className="select-field" aria-label={label}>
        <span>{value}</span>
        <ChevronDown size={16} />
      </button>
    </label>
  );
}
