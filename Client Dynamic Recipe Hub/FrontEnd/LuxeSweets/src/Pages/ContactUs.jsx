import React, { useState, useEffect } from "react";
import usePost from "../hooks/usePost";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const ContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { data, loading, error, postData } = usePost(
    "http://localhost:1001/api/contact"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData({ Name, Email, Message });
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
      // Show success alert
      setShowAlert(true);
    } catch (err) {
      console.error("Error submitting contact form:", err);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <Header />
      <section className="bg-[#EEE9DB]" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-[#b0956e]">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                We'd love to hear from you! Reach out with any questions or
                comments about our sweet treats.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Information Section */}
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600">
                  We're here to help! If you have any inquiries or need support,
                  don't hesitate to reach out to us. Our team is ready to answer
                  all your questions and provide the assistance you need. You
                  can contact us via
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#b0956e] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Our Address
                      </h3>
                      <p className="text-gray-600">Orange Academy, Zarqa</p>
                      <p className="text-gray-600">Zarqa, Jordan</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#b0956e] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Contact
                      </h3>
                      <p className="text-gray-600">Mobile: +962 7789-78903</p>
                      <p className="text-gray-600">
                        Mail: LuxeSweets@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#b0956e] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Working hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-gray-900">
                  Ready to Get Started?
                </h2>
                <form onSubmit={handleSubmit}>
                  {showAlert && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                      Message sent successfully!
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={Email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                        rows="5"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-[#b0956e] text-white px-6 py-3 font-xl rounded-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
