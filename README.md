# Your React App

Welcome to the repository for our React application!

## Overview
This repository contains the source code for a [React](https://reactjs.org/) application that uses Golden Layout to apply widget effects in the app.

## Directory Structure

Here's a breakdown of the key directories and files within the project:


Directory Structure Image: 
![image](https://github.com/mecskyverse/GoldenLayout/assets/91150257/8b0c8df1-4688-4922-ae36-86e47c13cdb3)


- **public:** Contains static assets like the svg files here is a logo of Vite named (Vite.svg) which appear to be on top of tab. You can change icon in index.html file.
- **src:** Holds the main source code for the React application, including:
  - **components:** Houses reusable UI components. Mainly Navbar, Sidebar, Window1, Window2, Window3 these are the windows in the app usign golden layout.
  - **assets:** Stores images, fonts, and other static assets used within the components there is nothing much in it.
  - **App.jsx** It is the starting point of the application it renders all the components at one place. App.jsx also contains code of Golden Layout where you can tweak some styles of golden layout.
  - **index.css** Here contains the css or styles of the whole app divided in sections of Navbar styles, Main App styles and Sidebar styles. You can play with it to inhance look and feel of website.
  - **main.js:** The entry point for the application, responsible for rendering the React app into the DOM (some technical word not so important file in terms of development) !!Don't delete it.
- **.gitignore** github related file you can ignore it. This files does not tracked by git.
- **index.html** You can change title, add fonts in it etc. Don't add something in body.
- **package.json:** Here is your Package files most important when you install dependencies(will explain later) the dependencies will be installed in your computer in a folder named node_modules.

## Getting Started

1. **Prerequisites:**
   - Node.js and npm (or yarn) installed on your machine.
   - You can check NPM or node is already installed or not using
   - `npm -v` and `node -v` in your terminal. It will give a output something like this:
     ![image](https://github.com/mecskyverse/GoldenLayout/assets/91150257/b719a811-5fa8-46cd-a7f3-eac10199c6ea)


2. **Installation:**
   ```bash
   # Clone the repository
   git clone https://github.com/mecskyverse/GoldenLayout.git

   # Navigate to the project directory
   cd GoldenLayout

   # Install dependencies
   npm install
   ```
3. **Starting App**
   ```bash
    #Running the server
   npm run dev
   ```
   Now you can go to this url: (http://localhost:5173/). Here you can see your project running. I have added additional comments in the code for you to get better understanding of the code.
   
