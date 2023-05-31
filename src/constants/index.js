import {
    mobile,
    backend,
    creator,
    web,
    golang,
    typescript,
    flutter,
    python,
    dart,
    java,
    aiml,
    django,
    nodejs,
    mongodb,
    git,
    mySQL,
    docker,
    detroit,
    wajooba,
    enthem,
    unstack,
    draw,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },    
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Dev Ops Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MySQL",
      icon: mySQL,
    },
    {
      name: "AI/ML",
      icon: aiml,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Golang",
      icon: golang,
    },
  ];
  
  const experiences = [
    {
      title: "BackEnd Developer",
      company_name: "Wajooba",
      icon: wajooba,
      iconBg: "#383E56",
      date: "Jun 2022 - Aug 2022",
      points: [
        "1. Develop MongoDB and NodeJS API services to fulfill specific requirements.",
        "2. Generate customizable client report APIs with flexible parameters for date range, data filters, and output formats.",
        "3. Leverage MongoDB's aggregation feature to create efficient data pipelines for fetching, modifying, and analyzing data.",
        "4. Integrate SendInBlue and Airbyte services with Node.js and Express to enhance application functionality.",
        "5. Participate in code reviews and provide constructive feedback to maintain high code quality and promote collaboration."
    ]
    },
    {
      title: "Full stack Developer",
      company_name: "Detroit Education Society",
      icon: detroit,
      iconBg: "#E6DEDD",
      date: "May 2021 - Aug 2021",
      points: [
        "1. Develop an MVP for a volunteer management app, focusing on handling volunteers and organizations.",
        "2. Design the app architecture, including both front-end and back-end development.",
        "3. Create a structured SQL database to manage the relationship between volunteers and the organization table.",
        "4. Implement the middleware to facilitate the connection between the client and server.",
    ]
    },
  ];
  
  const projects = [
    {
      name: "Enthem - A social media",
      description:
        "The app connects people in proximity based on similar interests, allowing them to create and join rooms for interactive discussions. Developed using Flutter, Dart, Bloc, Node.js, MongoDB, Neo4j, graphs, sockets, and AIML, it offers a dynamic social networking platform with real-time communication and personalized assistance.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "neo4j",
          color: "pink-text-gradient",
        },
      ],
      image: enthem,
      source_code_link: "https://github.com/PratikJH153/Enthem-Backend",
    },
    {
      name: "Unstack - Productivity",
      description:
        "Enhance focus and productivity with this Flutter app. Concentrate on one task at a time using state management with Dart and Provider. Organize your schedule with timeline arrangement and track habits. Securely store data in SQL for reliability. Experience heightened productivity and organization.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bloc",
          color: "pink-text-gradient",
        },
      ],
      image: unstack,
      source_code_link: "https://github.com/PratikJH153/UnStack",
    },
    {
      name: "DrawAI - Guess Draw",
      description:
        "Explore the fascinating world of shape recognition on this dynamic website. Draw various shapes and witness the precise predictions made by the AIML model, powered by TensorFlow, Keras, Python, Flask. Engage in an interactive and visually captivating experience that combines artistry with cutting-edge technology.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: draw,
      source_code_link: "https://github.com/PratikJH153/DrawAI---ML-Project",
    },
  ];
  
  export { services, technologies, experiences, projects };
  