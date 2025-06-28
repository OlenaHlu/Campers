import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import FormikDatePicker from "../../../common/FormikDatePicker";

type BookingFormValues = {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
};

const BookingForm = () => {
  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const bookSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(18, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Name must contain only letters and spaces")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    bookingDate: Yup.date()
      .nullable()
      .typeError("Invalid date format!")
      .min(tomorrow, "Booking date cannot be earlier than tomorrow!")
      .required("Required!"),
    comment: Yup.string().optional(),
  });

  return (
    <div className={css.formContainer}>
      <Formik<BookingFormValues>
        initialValues={initialValues}
        validationSchema={bookSchema}
        onSubmit={(formData, { resetForm }) => {
          console.log("Form data submitted:", formData);
          toast.success("Booking successfully completed!");
          resetForm();
        }}
      >
        <Form>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.inputsContainer}>
            <div className={css.input}>
              <Field
                className={css.formField}
                name="name"
                type="text"
                placeholder="Name*"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </div>
            <div className={css.input}>
              <Field
                className={css.formField}
                name="email"
                type="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="span"
              />
            </div>

            <div className={css.input}>
              <FormikDatePicker
                name="bookingDate"
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                className={css.formField}
                minDate={tomorrow}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="bookingDate"
                component="span"
              />
            </div>
            <div>
              <Field
                as="textarea"
                className={`${css.formField} ${css.textarea}`}
                name="comment"
                placeholder="Comment"
                rows={3}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="comment"
                component="span"
              />
            </div>
          </div>
          <div className={css.btnContainer}>
            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
