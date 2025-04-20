import React from "react";
import profile from "../images/Kristian_Dimas_Adi_Wicaksono.JPG";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, email } }) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-gray-200 shadow-xl rounded-xl p-5">
        <div className="w-32 h-32 mx-auto overflow-hidden rounded-full shadow-xl">
          <img
            className="w-full h-full object-cover object-top"
            src={profile}
            alt="Profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-l sm:text-xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
