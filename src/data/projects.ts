export const projects = [
  {
    id: 1,
    featured: true,
    title: "ECATS Test",
    githubURL: "https://github.com/globallabo/ecats-test",
    image: "ecats.png",
    description:
      "A full-stack, multiple-choice test app made to evaluate the English level of Japanese EFL/ESL students.",
    longDescription:
      "This is a full-stack web application to test students on English grammar and vocabulary using multiple choice questions. It is often necessary to evaluate the level of a student in such a way. When joining a school, it's important to place a student in a lesson appropriate to their level. Afterwards, it's important to check a student's progress at regular intervals. This application saves teachers' time by administering the tests remotely and asynchronously. Questions are formulated to focus on a particular grammar or vocabulary point. Students are given a variety of questions  The backend is Django (DRF) with PosgreSQL. The frontend is React with Redux Toolkit, RTK-Query and Material UI. Deployment is through Docker. The project is still under development and has not been released for production yet.",
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: 2,
    featured: true,
    title: "Elite Curriculum Generator",
    githubURL: "https://github.com/globallabo/elite",
    image: "elite.png",
    description:
      "A project to easily generate a full set of PDFs for a business English curriculum with a standard template and content pulled from Google Sheets.",
    longDescription:
      "A project to easily generate a full set of PDFs for a business English curriculum with a standard template and content pulled from Google Sheets.",
    technologies: ["Python", "Google Sheets", "HTML", "CSS", "Jinja"],
  },
  {
    id: 3,
    featured: true,
    title: "Eikenvocab Flashcard Generator",
    githubURL: "https://github.com/globallabo/eikenvocab",
    image: "eikenvocab.png",
    description:
      "A project to automatically produce a set of vocabulary flashcards for students studying to take standardized English exams.",
    longDescription:
      "A project to automatically produce a set of vocabulary flashcards for students studying to take standardized English exams.",
    technologies: ["Python", "Google Sheets", "HTML", "CSS", "Jinja"],
  },
  {
    id: 4,
    featured: true,
    title: "checkr",
    githubURL: "https://github.com/cbunn81/checkr",
    image: "checkr.gif",
    description:
      "A command-line tool that scans files and records their cryptographic hashes, and later re-scans them and verifies the hashes to ensure data integrity.",
    longDescription:
      "A command-line tool that scans files and records their cryptographic hashes, and later re-scans them and verifies the hashes to ensure data integrity.",
    technologies: ["Python", "Typer", "SQLite"],
  },
];
