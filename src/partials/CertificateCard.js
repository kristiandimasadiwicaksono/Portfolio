// src/partials/CertificateCard.js
import React from "react";

const CertificateCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Lihat Sertifikat
        </a>
      )}
    </div>
  );
};

export default CertificateCard;
