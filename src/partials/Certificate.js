// src/partials/Certificates.js
import React from "react";
import data from "../assets/data";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  return (
    <section id="certificates" className="py-10 bg-gray-200 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certificate.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              description={cert.description}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
