export function InputText({ id, label, value, setValue }) {
  return (
    <div className="section-label">
      <label htmlFor={id}>{label}</label>
      <input
        type="email"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
