import { useState } from "react";
import { useInView } from "react-intersection-observer";

const faqData = [
  {
    question: "What are your working hours?",
    answer:
      "There are several restaurants, each with its own operating hours. You can find the opening and closing times in the product or restaurant details.",
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact customer service via Phone, Email.",
  },
  {
    question: "What is your return policy?",
    answer:
      "If you do not wish to proceed with a request or if the request was not properly received, it will be returned.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We offer several payment methods, including credit cards, bank transfers, PayPal.",
  },
];

function FAQ() {
  const [openFAQs, setOpenFAQs] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true });

  function toggleFAQ(index) {
    setOpenFAQs((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section className="pt-[50px] bg-[#F0E6D8] font-cairo text-[#b0956e]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#b0956e]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium max-w-3xl mx-auto text-[#b0956e]">
            Find answers to the most commonly asked questions here.
          </p>
        </div>
        <div
          ref={ref}
          className={`max-w-4xl mx-auto space-y-4 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#b0956e] rounded-lg border border-[#a08c6b] shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                type="button"
                className="flex items-center justify-between w-full px-6 py-4 border-b rounded-b-lg border-[#a08c6b]"
              >
                <span className="text-lg sm:text-xl font-semibold text-white">
                  {faq.question}
                </span>
                <i
                  className={`text-white ${
                    openFAQs[index]
                      ? "fa-solid fa-angle-up"
                      : "fa-solid fa-angle-down"
                  }`}
                ></i>
              </button>
              <div
                className={`${openFAQs[index] ? "block" : "hidden"} px-6 py-4`}
              >
                <p className="text-white font-medium text-base whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          {/* You can add additional content here if needed */}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
