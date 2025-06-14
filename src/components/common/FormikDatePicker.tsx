import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";

type FormikDatePickerProps = {
  name: string;
  placeholderText?: string;
  dateFormat?: string;
  className?: string;
  minDate?: Date;
  [key: string]: any;
};

const FormikDatePicker: React.FC<FormikDatePickerProps> = ({
  name,
  ...props
}) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <DatePicker
      selected={(field.value && new Date(field.value)) || null}
      onChange={(date: Date | null) => helpers.setValue(date)}
      onBlur={() => helpers.setTouched(true)}
      name={field.name}
      {...props}
      selectsMultiple={false as any}
    />
  );
};

export default FormikDatePicker;
