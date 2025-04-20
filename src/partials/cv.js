import React from "react";

const DownloadCVButton = () => {
  return (
    <div class="flex justify-center">
        <a href="/CV.pdf" className="inline-block px-2 py-3 mt-4 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300">
        Lihat CV
        </a>
    </div>
  );
};

export default DownloadCVButton;
