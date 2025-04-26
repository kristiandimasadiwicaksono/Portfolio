import React from "react";

const SeeCVButton = () => {
  return (
    <div class="flex justify-center">
        <a href="/CV.pdf" className="inline-block px-2 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300">
        See CV
        </a>
    </div>
  );
};

export default SeeCVButton;
