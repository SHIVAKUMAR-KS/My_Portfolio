import React, { useState } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import contactImage from "../../assets/images/contact-image.jpg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4eaa7b0e-cc5c-4695-9274-79b54a4075cb");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="card card0 border-0">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            <div className="card1">
              <div className="border-line">
                <img
                  src={contactImage}
                  alt="contact"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            <div className="card2 card border-0 p-5">
              <div className="flex items-center">
                <h6 className="flex items-center">
                  Contact With
                  <BsLinkedin className="text-blue-500 ml-2" size={30} />
                  <BsGithub className="text-black ml-2" size={30} />
                  <BsFacebook className="text-blue-500 ml-2" size={30} />
                </h6>
              </div>

              <div className="flex items-center justify-center my-4">
                <div className="w-full border-t border-gray-500"></div>
                <span className="text-gray-500 text-sm px-3">OR</span>
                <div className="w-full border-t border-gray-500"></div>
              </div>

              <div className="contact-col">
                <form onSubmit={onSubmit}>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="block w-full border border-gray-300 rounded p-2 mb-4"
                  />

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your mobile number"
                    required
                    className="block w-full border border-gray-300 rounded p-2 mb-4"
                  />

                  <label htmlFor="message">Write Your message here</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Enter your message"
                    required
                    className="block w-full border border-gray-300 rounded p-2 mb-4"
                  ></textarea>

                  <button
                    type="submit"
                    className="btn dark-btn w-full py-2 bg-blue-500 text-white font-semibold rounded"
                  >
                    Submit now
                  </button>
                </form>

                <span className="text-gray-600">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
