import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const AutoText = () => {
  const typedElement = useRef(null); // Reference to the element where the text will appear

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "NodeJs Developer", "React Developer", "Postman API tester"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    // Cleanup to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="autotext" ref={typedElement}></span>;
};

export default AutoText;
