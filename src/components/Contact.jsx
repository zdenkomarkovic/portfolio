import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const [inputData, setInputData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = headerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const validateForm = () => {
    const errors = {};
    for (const field in inputData) {
      if (inputData[field] === "") {
        errors[field] = ` is required`;
      }
    }
    if (inputData.email && !isEmailValid(inputData.email)) {
      errors.email = `Invalid email address`;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm("service_nkpnh9d", "contact_form", form.current, {
          publicKey: "0jH7qspIuPcDt3ZXc",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setInputData({ user_name: "", user_email: "", message: "" });
    }
  };

  console.log(formErrors);
  return (
    <div className=" bg-stone-500  text-white pt-[5vw] pb-[8vw]">
      <div className=" w-[65vw] mx-auto">
        <h2
          ref={headerRef}
          className={`text-[2.5vw] z-0 font-bold text-center ${
            isVisible ? "transform duration-1000  scale-100 " : "scale-50"
          }`}
        >
          CONTACT
        </h2>
        <div className="flex justify-between mt-[5vw] items-center">
          <div>
            <h3 className="text-[3.1vw] font-semibold">
              Got a problem to solve?
            </h3>
            <p className="text-[1.5vw] font-extralight font">
              Tell me your ideas, and let's develop them together
            </p>
            <p className="text-[1.5vw] font-semibold mt-[5vw]  mb-[1vw]">
              Or contact me directly
            </p>

            <a
              href="mailto:zdenkomarkovic75@gmail.com "
              target="_blank"
              className="flex gap-3 text-[1.25vw] mb-[0.5vw] items-center font-light"
            >
              {" "}
              <img
                src="../../public/icons8-email-24.png"
                className="h-[1.4vw] w-[1.4vw]"
              />{" "}
              zdenkomarkovic75@gmail.com
            </a>
            <a
              href="tel:00381637429415"
              target="_blank"
              className="flex gap-3 text-[1.1vw] font-light items-center mb-[0.6vw]"
            >
              {" "}
              <img
                src="../../public/icons8-phone-24.png"
                className="h-[1.2vw] w-[1.2vw]"
              />{" "}
              00381641967267 ( MON-FRI: 9AM - 5PM CET )
            </a>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/zdenko-markovi%C4%87-2b5b23253"
                target="_blank"
                className="flex gap-3"
              >
                {" "}
                <img
                  src="../../public/icons8-linkedin-24.png"
                  className="h-[1.4vw] w-[1.4vw]"
                />{" "}
              </a>
              <a
                href="https://github.com/zdenkomarkovic"
                target="_blank"
                className="flex gap-3 text-[2vw]"
              >
                {" "}
                <img
                  src="../../public/icons8-github-24.png"
                  className="h-[1.4vw] w-[1.4vw]"
                />{" "}
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-[1.3vw] w-[27vw]">
              <input
                name="user_name"
                type="text"
                placeholder="Your name:"
                onChange={handleInput}
                value={inputData.user_name}
                className={`px-[1.5vw] py-[0.7vw] text-[1.5vw] text-stone-500 rounded-md ${
                  formErrors.user_name && "border-8 border-red-500"
                }`}
              />
              <input
                name="user_email"
                type="email"
                placeholder="Your email"
                onChange={handleInput}
                value={inputData.user_email}
                className={`px-[1.5vw] py-[0.7vw] text-[1.5vw] text-stone-500 rounded-md ${
                  formErrors.user_name && "border-8 border-red-500"
                }`}
              />
              <textarea
                name="message"
                placeholder={`Your message to me`}
                onChange={handleInput}
                value={inputData.message}
                className={`px-[1.5vw] py-[0.7vw] text-[1.5vw] text-stone-500 rounded-md h-[12vw] ${
                  formErrors.user_name && "border-8 border-red-500"
                }`}
              />
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="bg-white mt-[1vw] px-[5vw] text-stone-500 py-[0.5vw] text-[1.5vw] rounded-full"
                />
              </div>
              {/* <button className="bg-white mt-[1vw] px-[1.5vw] text-stone-500 py-[0.5vw] text-[1.5vw] rounded-full">
                  Ask me whatever you want
                </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
