import { useForm } from "react-hook-form";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import FormInput from "../components/atoms/FormInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

const FormPage = () => {
  const push = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  const onFormSubmit = (formData) => {
    toast("Mesajınız başarıyla gönderiliyor");

    setTimeout(() => {
      push.push("/");
    }, 2000);

    axios
      .post("olmayan-bir-url.com", formData)
      .then((res) => {
        localStorage.setItem("formData", JSON.stringify(formData));
      })
      .catch((res) => {
        console.error(res);
      });
  };

  return (
    <>
      <div className="relative z-50 p flex flex-col gap-8 sm:px-20 px-2 h-full md:w-[1100px] md:m-auto ">
        <Link
          to="/"
          className="hover-link pt-6 md:pt-0 font-semibold text-2xl text-[#7B61FF]  dark:text-[#8F88FF]"
        >
          <i class="bx bx-left-arrow-alt "></i>Profile
        </Link>
        <Form
          onSubmit={handleSubmit(onFormSubmit)}
          className="m-auto w-full p-10 mb-6 rounded  bg-transparent shadow dark:shadow-white-md shadow-navy-blue-600 bg-white dark:bg-gray-300"
        >
          <FormGroup className="md:w-[500px] m-auto flex flex-col ">
            <Label className="m-2 text-lg font-semibold">Email</Label>
            <FormInput
              className="p-2 m-2 border-2  shadow shadow-indigo-600"
              type="email"
              placeHolder="email@gmail.com"
              register={register}
              name={"email"}
              validations={{
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email is not valid.",
                },
              }}
              invalid={!!errors.email?.message}
              data-testid="email-input"
            />
            <FormFeedback className="text-deep-orange-900">
              {errors.email?.message}
            </FormFeedback>
          </FormGroup>
          <FormGroup className="md:w-[500px] m-auto flex flex-col">
            <Label className="m-2 text-lg font-semibold">Message</Label>
            <FormInput
              className="p-2 m-2 border-2  shadow shadow-indigo-600"
              type="text"
              name="message"
              invalid={!!errors.message?.message}
              placeHolder="message"
              register={register}
              validations={{
                required: "Message is required !",
              }}
            />
            <FormFeedback className="text-deep-orange-900">
              {errors.message?.message}
            </FormFeedback>
          </FormGroup>

          <Input
            className="cursor-pointer m-auto md:w-[300px] mt-6 px-6 py-2 shadow text-white bg-indigo-600 rounded-md flex justify-center items-center"
            type="submit"
            formNoValidate="formnovalidate"
            value="Send Message"
            disabled={false}
            data-testid="login-submit-btn"
          />
          <ToastContainer />
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default FormPage;
