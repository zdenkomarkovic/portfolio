import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../assets/icons8-email-24.png";
import phoneIcon from "../assets/icons8-phone-24.png";
import linkedinIcon from "../assets/icons8-linkedin-24.png";
import gitIcon from "../assets/icons8-github-24.png";

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

  return (
    <div
      id="contact"
      className=" bg-stone-500  text-white pt-[50px] md:pt-[5vw] pb-[50px] md:pb-[8vw]"
    >
      <div className="w-[90%] md:w-[65vw] mx-auto">
        <h2
          ref={headerRef}
          className={`text-[30px] md:text-[2.5vw] font-bold text-center ${
            isVisible ? "transform duration-1000  scale-100 " : "scale-50"
          }`}
        >
          CONTACT
        </h2>
        <div className="flex flex-col-reverse gap-[30px] md:flex-row justify-between mt-[50px] md:mt-[5vw] items-center">
          <div className="text-center">
            <h3 className="text-[32px] md:text-[3.1vw] font-semibold">
              Got a problem to solve?
            </h3>
            <p className="text-[15px] md:text-[1.5vw] font-extralight font">
              Tell me your ideas, and let's develop them together
            </p>
            <p className="text-[25px] md:text-[1.5vw] font-semibold mt-[80px] md:mt-[5vw] mb-[15px] md:mb-[1vw]">
              Or contact me directly
            </p>
            <div className="flex flex-col gap-[12px] md:gap-[0.5vw]">
              <a
                href="mailto:zdenkomarkovic75@gmail.com "
                target="_blank"
                className="flex gap-3 justify-center items-center text-[15px] md:text-[1.25vw] font-light"
              >
                {" "}
                <img src={emailIcon} className="w-[20px] md:w-[1.4vw]" />{" "}
                zdenkomarkovic75@gmail.com
              </a>

              <a
                href="tel:00381637429415"
                target="_blank"
                className="flex gap-3 text-[12px] md:text-[1.1vw] justify-center font-light items-center "
              >
                {" "}
                <img
                  src={phoneIcon}
                  className="w-[18px] md:h-[1.2vw] md:w-[1.2vw]"
                />{" "}
                00381641967267 ( MON-FRI: 9AM - 5PM CET )
              </a>
              <div className="flex gap-5 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/zdenko-markovi%C4%87-2b5b23253"
                  target="_blank"
                  className=""
                >
                  {" "}
                  <img
                    src={linkedinIcon}
                    className="w-[22px]  h-[22px] md:h-[1.4vw] md:w-[1.4vw]"
                  />{" "}
                </a>
                <a
                  href="https://github.com/zdenkomarkovic"
                  target="_blank"
                  className=""
                >
                  {" "}
                  <img
                    src={gitIcon}
                    className="w-[26px] h-[26px] md:h-[1.55vw] md:w-[1.55vw]"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[90%]  md:w-[27vw] text-[18px]  md:text-[1.5vw]"
          >
            <div className="flex flex-col gap-[15px] md:gap-[1.3vw]">
              <input
                name="user_name"
                type="text"
                placeholder="Your name:"
                onChange={handleInput}
                value={inputData.user_name}
                className={`px-[15px] py-[7px] md:px-[1.5vw] md:py-[0.7vw] text-stone-500 rounded-sm md:rounded-md ${
                  formErrors.user_name && "animate-pulse"
                }`}
              />
              <input
                name="user_email"
                type="email"
                placeholder="Your email"
                onChange={handleInput}
                value={inputData.user_email}
                className={`px-[15px] py-[7px] md:px-[1.5vw] md:py-[0.7vw] text-stone-500 rounded-sm md:rounded-md ${
                  formErrors.user_email && "animate-pulse"
                }`}
              />
              <textarea
                name="message"
                placeholder={`Your message to me`}
                onChange={handleInput}
                value={inputData.message}
                className={`px-[15px] py-[7px] md:px-[1.5vw] md:py-[0.7vw] text-stone-500 rounded-sm md:rounded-md h-[120px] md:h-[12vw] ${
                  formErrors.message && " animate-pulse "
                }`}
              />
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="bg-white mt-[1vw] px-[25px] md:px-[5vw] text-stone-500 md:py-[0.5vw] rounded-full"
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
