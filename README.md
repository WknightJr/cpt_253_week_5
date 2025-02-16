# Weekly Assignment Instructions


### Overview
This assignment will provide an introduction to React Router!  React Router is a library which allows you to convert your React application into a "Single Page Application" or "SPA".  This is useful because you can create an application which shares menus, backgrounds, styling, etc. while allowing for various application "endpoints" like "/home", "/about", "profile/1"!

### Learning Outcomes
By the end of this assignment, you should be able to:
- Learn more about react router and how it works
- Create several page "routes" in your react application

### Instructions
1. **Read the following materials**:
   - [GeeksForGeeks React Router](https://www.geeksforgeeks.org/reactjs-router/)

     This is an excellent overview of the "React Router" library in ReactJS!  It covers what a SPA is as well as how you can add routing, "nav" menus, and pages to your project!
     
   - [Cosden Solutions React Router](https://youtu.be/oTIJunBa6MA?si=c17NbydvoGcWXsP-)

     YouTube video by Cosden solutions which does a "walkhrough" of adding a React Router to your application!  Please note that in this video you are shown how to use the URL parameter!
     
   
2. **Complete the following tasks**:

   - Please clone this repository to your local machine, run "npm install", and then run "npm run dev" to ensure that it starts!
   - Once your program is up and running please make the following changes:

      - add an "/error" route which points to the Error Page
      - add a "/profile/:id" route which points to the profile page and displays the "profile" (ensure the profileID variable updates) to the screen.  This is useful for profile pages!
    
   - Once you are happy with your results please publish your updated repository to GitHub and post your URL in Brightspace!



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
