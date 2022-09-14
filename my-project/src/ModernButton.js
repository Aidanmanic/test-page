import React, { Component } from "react";

function ModernButton(props) {
  return (
    <button
      className="bg-blue-500 mt-3 rounded-md h-10 w-56 text-white hover:shadow-xl
    hover:bg-indigo-500 transition ease-in"
    >
      <a href={props.url}>{props.text}</a>

    </button>
  );
}

export default ModernButton;
