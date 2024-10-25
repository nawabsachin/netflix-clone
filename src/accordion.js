import React, { useState } from 'react';
import './Accordion.css'; // Optional: Include your custom CSS for styling

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <h3>{title}</h3>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-body">{content}</div>}
  </div>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'What is Netflix', content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' },
    { title: 'Where can I watch', content: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.' },
    { title: 'How much does Netflix cost', content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.' },
    {  title:"What can I watch on Netlix" , content:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." }
];



  return (
  
  <><center>    <h2>Frequently Asked Questions</h2></center>
    <div className="accordion">
        
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
    </>

  );
};

export default Accordion;
