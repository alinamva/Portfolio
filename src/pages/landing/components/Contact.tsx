import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_wtf7f0k",
          "template_i2shul9",
          form.current,
          "rCdDVRKCbjOBbl1C-"
        )
        .then(
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
    <div className="w-full p-12 flex justify-center">
      <form
        className="w-1/2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="user_name"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-2">
            Title
          </label>
          <input
            name="title"
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-2">
            Email Address
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="user_email"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-2">
            Your message
          </label>
          <textarea
            className="shadow appearance-none border h-40 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            placeholder="Your message"
            name="message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sendEmail}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
