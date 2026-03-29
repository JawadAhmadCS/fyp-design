interface TextFieldProps {
  label: string;
  value: string;
  multiline?: boolean;
}

export function TextField({ label, value, multiline = false }: TextFieldProps) {
  return (
    <label className={multiline ? "field-block wide" : "field-block"}>
      <span>{label}</span>
      {multiline ? (
        <textarea className="text-field multiline" defaultValue={value} rows={7} />
      ) : (
        <input className="text-field" defaultValue={value} />
      )}
    </label>
  );
}
