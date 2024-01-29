import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm("service_wtf7f0k", "template_i2shul9", form.current, "rCdDVRKCbjOBbl1C-").then(
        (result) => {
          console.log(result.text);
          toast("Email was sent");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  return (
    <div className='flex justify-center w-full p-6'>
      <ToastContainer />
      <form className='w-1/2' ref={form} onSubmit={sendEmail}>
        <div className='mb-4'>
          <label className='block mb-2 font-bold text-gray-700 dark:text-gray-300 text-md'>Name</label>
          <input
            className='w-full px-3 py-2 leading-tight text-gray-700 bg-transparent border rounded shadow appearance-none dark:text-gray-300 focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            name='user_name'
            placeholder='Name'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-bold text-gray-700 dark:text-gray-300 text-md'>Title</label>
          <input
            name='title'
            className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 bg-transparent border rounded shadow appearance-none dark:text-gray-300 focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            placeholder='Title'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-bold text-gray-700 dark:text-gray-300 text-md'>Email Address</label>
          <input
            className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 bg-transparent border rounded shadow appearance-none dark:text-gray-300 focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            name='user_email'
            placeholder='Email Address'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 font-bold text-gray-700 dark:text-gray-300 text-md'>Your message</label>
          <textarea
            className='w-full h-40 px-3 py-2 mb-3 leading-tight text-gray-700 bg-transparent border rounded shadow appearance-none dark:text-gray-300 focus:outline-none focus:shadow-outline'
            id='title'
            placeholder='Your message'
            name='message'
          ></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <Button variant='contained' onClick={sendEmail} size='large'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
