import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  address: Yup.string().required("Это поле обязательное к заполнению"),
  name: Yup.string().required("Это поле обязательное к заполнению"),
  phoneNumber: Yup.string().required("Это поле обязательное к заполнению"),
  extraRequirements: Yup.string(),
});
