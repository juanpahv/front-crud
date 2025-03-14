interface CustomInputProps {
  label: string;
  type: string;
  placeholder: string;
  maxLength: number;
  hasValue: boolean;
  required: boolean;
  name: string;
  value: string | number; // Accept value prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Accept onChange prop
}

export const CustomInput = ({
  label,
  type,
  placeholder,
  maxLength,
  hasValue,
  required,
  name,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        value={value} // Use value prop for controlled component
        onChange={onChange} // Handle change event
      />
    </div>
  );
};
