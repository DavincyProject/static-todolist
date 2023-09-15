import React from "react";

export default function Button(props) {
  const { bgColor, text, type, onClick } = props;

  const className = `${bgColor} rounded mt-2 text-white font-medium w-full h-7`;

  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
}
