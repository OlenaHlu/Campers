import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";

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
    <div>
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
          <h3>Book your campervan now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          <div>
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
          <div>
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

          <div>
            <Field
              className={css.formField}
              name="bookingDate"
              placeholder="Booking date*"
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
              className={css.formField}
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
          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
