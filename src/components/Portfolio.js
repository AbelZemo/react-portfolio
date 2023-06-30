import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Web APIs: Code Quiz",
    languages: "html, css, js",
    image: "/image/profile.jpeg",
    description: "This code quiz involved completing a coding assessment which typically comprises a combination of multiple-choice questions and interactive challenges. The goal was to build a timed code quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It also features a clean and polished UI and is responsive, ensuring that it adapts to multiple screen sizes.",
    repo: "https://github.com/AbelZemo/WEB_API_ASSIGNMENT_4",
    live: "https://abelzemo.github.io/WEB_API_ASSIGNMENT_4/",
  },
  {
    id: 1,
    title: "Server-side apis challenge weather dashboard",
    languages: "html, handlebars, js",
    image: "/image/profile.jpeg",
    description: "server-side apis challenge weather dashboard is a web application that uses HTML * CSS * JavaScript * jQuery that will help you to predict a cities weather upto five days. Simply search a city that want to see it's weather and hit the search button. Then you will see the City name, Current day, Weather icon, Tempeture:, Humidity, Wind Speed on the top and you will also see 5 day weather forecast at the bottom.",
    repo: "https://github.com/AbelZemo/server-side-apis-challenge-weather-dashboard-1-",
    live: "https://abelzemo.github.io/server-side-apis-challenge-weather-dashboard-1-/",
  },
  {
    id: 2,
    title: "Third-party apis challenge work day scheduler",
    languages: "html, css, js, handlebars",
    image: "/image/profile.jpeg",
    description: "This third-party apis challenge work day scheduler is a web application that uses jquery, bootstrap, and moment.js that will help you to eschedule your work day. Simply click on the textarea of the timeblock you want to change and type in your schedule for the hour. When you are done, click the save icon and it will be saved in local storage for later use.",
    repo: "https://github.com/AbelZemo/work-day-scheduler",
    live: "https://abelzemo.github.io/work-day-scheduler/Develop/index.html",
  },
  {
    id: 3,
    title: "BottomFeeders",
    languages: "html, css, js",
    image: "/image/profile.jpeg",
    description: "This project shows the worst stores in an area. A user will go to the website and search for their area and store type. The website will return the worst rated stores in that location for that category.",
    repo: "https://github.com/Chartok/Bottom-Feeders",
    live: "https://github.com/Chartok/Bottom-Feeders",
  },
  {
    id: 4,
    title: "E-commerce Back End",
    languages: "Javascript, Node.js, Sequelize, MySQL2, Express, Dotenv",
    image: "/image/profile.jpeg",
    description: "This app needs a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application won’t be deployed so I will show a walkthrough video that demonstrates its functionality.",
    repo: "https://github.com/AbelZemo/E-commerce-Back-End-",
    live: "https://drive.google.com/file/d/1L6EVi4bqyxdYBl70rCsG3sfARiC_czXl/view",
  },
  {
    id: 5,
    title: "Paws Claws and Tails",
    languages: "Technologies used Node JS, Express JS., Handlebars, Bootstrap, Bcrypt, cookie parser, fullcalendar,",
    image: "/image/profile.jpeg",
    description: "Pet adoption app that displays all available pets for adoption. User can generate favorites through button click. Users can volunteer at the shelter using fullcalendar. Contact us form. Add a new pet functionality. Foster tab for form to volunteer for foster care. Technologies used Node JS, Express JS., Handlebars, Bootstrap, Bcrypt, cookie parser, fullcalendar,",
    repo: "https://github.com/cameronoberlies/Paws-Claws-and-Tails",
    live: "https://paws-claws-and-tails.herokuapp.com/",
  },
  {
    id: 6,
    title: "Express.js Challenge: Note Taker",
    languages: "HTML, CSS, JavaScript, Node js and  Express Js",
    image: "/image/profile.jpeg",
    description: "The challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.",
    repo: "https://github.com/AbelZemo/note-taker-application-expres",
    live: "https://note-taker-application-expres.herokuapp.com/notes",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page">
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;