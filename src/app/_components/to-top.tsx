"use client";

import { AiOutlineArrowUp } from "react-icons/ai";

export default function ToTop() {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <span onClick={scrollTop} className="scrollTop">
      <AiOutlineArrowUp size={"0.9rem"} />
      To top
    </span>
  );
}
