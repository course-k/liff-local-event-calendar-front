import { Formik } from "formik";

interface FormValues {
  eventdate: string;
}

const initialValues: FormValues = {
  eventdate: "",
};

const RegisterEvent = () => {
  return <Formik initialValues={initialValues} onSubmit={() => {}}></Formik>;
};
export default RegisterEvent;
