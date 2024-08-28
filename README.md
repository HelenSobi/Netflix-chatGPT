#####     MovieFinder - Find Movies   #######

##### React JS + Tailwind CSS ########

Create React project using the following command
`npm create vite@latest project_name -- --template react`

### install Tailwind CSS and follow thw official docs
    https://tailwindcss.com/docs/guides/vite

### install react-router-dom
`npm i -D react-router-dom`

### install react slick-slider

`npm install react-slick`

### Also install slick-carousel for css and font
`npm install slick-carousel`

### Import css files
`import "slick-carousel/slick/slick.css";`
`import "slick-carousel/slick/slick-theme.css";`

### install Redux Tools
`npm install @reduxjs/toolkit`

### Bind to react
`npm install react-redux`

### install .env variables to secure API key
`npm i dotenv`

 create a .env file to root of project directory

 ## Define your API KEY
 `VITE_API_KEY = `

Ignore the `.env` file to `.gitignore`
 
Access the API key in your code

`import.meta.env.VITE_API_KEY`

### install firebase for authentication and hosting

`npm install firebase`

### create firebase project in firebase console

### setup authentication method email/password

create `firebase.jsx` file and copy `firebaseConfig` from the firebase console

### Initialize Firebase Authentication and get a reference to the service

`export const auth = getAuth(app);`

### install firebase CLI
`npm install -g firebase-tools`

###### Steps for deployment

### Login with firebase
`firebase login`

### intializing firebase
`firebase init`
    1.  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action 
    deploys
    2. Use an existing project
    3. What do you want to use as your public directory? dist
    4.Configure as a single-page app (rewrite all urls to /index.html)? No
    5. Set up automatic builds and deploys with GitHub? No
    firebase.json file created

### Deploy Command
`firebase deploy ` 

### App hosted at 

`https://netflixgpt-2024-aug.firebaseapp.com/`
