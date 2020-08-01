import React, { FunctionComponent, useRef } from "react";
import tw, { styled } from "twin.macro";
import FieldsContainer from "./FieldsContainer";

interface OwnProps {}

type Props = OwnProps;

// useFormField returns the value and onChange function of an input field
const useFormField = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(e.target.value),
    []
  );
  return { value, onChange };
};

const FormTextArea = () => {
  return <textarea id='messageTextarea' name='message' placeholder='Message' rows={5} />;
};

const FormInput = ({
  inputData,
  inputType,
  inputPlaceholder,
  inputID
}: {
  inputData: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; value: string };
  inputType: string;
  inputPlaceholder: string;
  inputID: string;
}) => {
  return (
    <div tw='w-2/3 mx-auto pb-5'>
      <input
        id={inputID}
        placeholder={inputPlaceholder}
        type={inputType}
        {...inputData}
        tw='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
      />
    </div>
  );
};

const ContactForm: FunctionComponent<Props> = (props) => {
  const nameField = useFormField();
  const emailField = useFormField();
  const messageField = useFormField();
  const formRef = React.useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `The Contact Form Says: \n ${nameField.value} \n ${emailField.value} \n ${messageField.value}`
    );
    // @ts-ignore
    const data = new FormData(formRef.current);
    console.assert(data);
    fetch("http://0.0.0.0:8081/connection", { method: "POST", body: data })
      .then((res) => res.json())
      .then((json) => console.log("Contact Form Response: ", json));
  };

  const FormFields = (
    <>
      <FormInput
        inputData={nameField}
        inputID='name'
        inputPlaceholder='Full Name'
        inputType='text'
      />
      <FormInput
        inputData={emailField}
        inputID='email'
        inputPlaceholder='Preferred Email'
        inputType='email'
      />
      <textarea
        id='messageTextarea'
        name='message'
        placeholder='Message'
        rows={5}
        tw='mx-auto bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal'
        {...messageField}
      />
    </>
  );

  const FormMessage = (
    <>
      <h2 tw='text-xl text-gray-700 font-semibold'>Interested in working together?</h2>
      <ul tw='list-disc list-inside mb-4'>
        <li tw='text-gray-600 text-sm pt-4'>McDougald.engineer@gmail.com</li>
        <li tw='text-gray-600 text-sm italic pt-2'>Contact Directly for Mobile</li>
      </ul>
    </>
  );

  return (
    <div tw='m-2 w-full my-auto mx-auto '>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        tw='w-3/5 bg-gray-100 rounded mx-auto pt-4 shadow-lg'
      >
        <h1 tw='uppercase text-3xl text-gray-700 font-bold text-center pb-12'>
          Lets Keep in Touch
        </h1>
        <FieldsContainer formFields={FormFields} formMessage={FormMessage} />
        <button
          tw='shadow-2xl bg-blue-900 text-xl hover:bg-blue-800 text-white font-bold py-4 px-12 -ml-5 -mb-5 rounded shadow mt-4'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
