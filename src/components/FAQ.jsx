import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What documents are required to rent a car?",
      answer: "You need a valid driver's license, a copy of your passport or ID, and a valid credit card for payment and security purposes."
    },
    {
      question: "Can I rent a car without a credit card?",
      answer: "Unfortunately, a valid credit card is required for security purposes during the rental process."
    },
    {
      question: "Is there a minimum age to rent a car?",
      answer: "Yes, the minimum age to rent a car is usually 21, but it may vary depending on the car type and rental policy."
    },
    {
      question: "Do you offer long-term car rentals?",
      answer: "Yes, we offer flexible long-term rental options tailored to your needs. Contact us for more details."
    },
    {
      question: "What should I do in case of an accident or breakdown?",
      answer: "Immediately contact our 24/7 support team for assistance. The contact information is provided in your rental agreement."
    },
  ];

  return (
    <div className=" mx-auto px-4 py-8 bg-slate-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#a85349]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-gray-800 text-lg">▼</span>
              </motion.div>
            </div>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;