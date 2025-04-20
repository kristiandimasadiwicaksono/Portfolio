import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Kristian Dimas Adi Wicaksono",
  title: "Front-End / Back-End Developer",
  social: {
    github: "https://github.com/kristiandimasadiwicaksono",
    email: "kristiandimasadiwicaksono@gmail.com",
  },
  about: {
    title: "My Background",
    description:'I am a college student at Politeknik Negeri Cilacap with a strong interest in web development, both frontend and backend. In backend development, I have experience in building RESTful APIs using CodeIgniter 4 and managing databases with MySQL. On the frontend side, I have worked on creating responsive user interfaces using HTML, CSS, Bootstrap, and Tailwind CSS. Currently, I am developing a web KRS distribution information system, where I am responsible for backend API development and frontend integration.',
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  certificate: [
    {
      title: "Junior Web Developer",
      description: "A Certificate from KOMINFO",
      link: "/sertif_JWD.pdf"
    },
  ],
  projects: [
    {
      title: "Backend with CI4",
      description: "🔥 Built with CodeIgniter 4, this backend provides RESTful API endpoints to manage student course registration (KRS), integrated with a MySQL database and structured for scalability.",

      link: "https://github.com/kristiandimasadiwicaksono/SI-KRS-Backend"
    },
    {
      title: "Digital library management (MVC)",
      description: "📚 Built with MVC pattern, this digital library system allows users to manage books efficiently. I handled the Frontend — ensuring a responsive design and smooth user experience.",

      link: "https://github.com/NalindraDT/tugas3_kelompok4"
    },
  ],
};
export default data;
