Create React project using the following command
`npm create vite@latest project_name -- --template react`

1. install Tailwind CSS and follow thw official docs
    https://tailwindcss.com/docs/guides/vite

2. install react-router-dom
`npm i -D react-router-dom`

3. install firebase for authentication and hosting
`npm install firebase`
4. create firebase project
5. setup authentication method email/password
6. install firebase CLI
`npm install -g firebase-tools`

7. install react slick-slider

`npm install react-slick`

Also install slick-carousel for css and font
`npm install slick-carousel`

### Import css files
`import "slick-carousel/slick/slick.css";`
`import "slick-carousel/slick/slick-theme.css";`


###### Steps for deployment

7. Login with firebase
`firebase login`
logged as helensobia29@gmail.com

8. intializing firebase
`firebase init`
    1.  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action 
    deploys
    2. Use an existing project
    3. What do you want to use as your public directory? dist
    4.Configure as a single-page app (rewrite all urls to /index.html)? No
    5. Set up automatic builds and deploys with GitHub? No
    firebase.json file created

9. Deploy Command
`firebase deploy ` 

10. install Redux Tools
`npm install @reduxjs/toolkit`

11. Bind to react
`npm install react-redux`

12. App hosted at 

`https://netflixgpt-2024-aug.firebaseapp.com/`


###### Firebase Authentication:

1. signUp(create users) done using `createUserWithEmailAndPassword`
2. used `Auth` in central place(firebase.jsx) to use it over all the components
3. signIn done using `signInWithEmailAndPassword`

###### Done

### development Stages
1. header
2. home page
3. routing
4. Create signIn or SignUp form
5. form validation
6. useRef - used to get reference to a variable / form data
    - it will give the reference to the inputbox
    - email.current.value gives the value of the email input box
7. signup form has fullname field
8. google firebase authentication
    - create a project
    - add firebase to web app
    - add a project
    - copy firebase config to firebase.jsx
    - enable authentication
        - email/password sigin method
        - to get rid of error, disable CORS Chrome extensions and retry
9. firebase setup
10. deploy app for production
11. Authentication : Implement Signup user API
12. Implement SignIn user API
13. Create a Redux Store (appStore.jsx)
14. Provide the Redux Store to React (App.jsx)
15. Create a Redux State Slice (userSlice.jsx)
16. Add Slice Reducers to the Store (appStore.jsx)
17. dispatch actions to the store:
    - whenever the user signIn/ SignUp/ SignOut we need to dipatch the action each time. 
    - so to avoid this there is an utility provided by firebase called `onAuthStateChanged`. use this to dipatch an action.
    - `onAuthStateChanged` is like an event listener calls only one time. So `useEffect` hook is used.
    - `onAuthStateChanged` is used in header.jsx(if it is called in app.jsx routing error may happen)
18. implemented Signout
19. updata User profile after creating a user and redirect to `/browse`
20.  Bug Fix: 
        - update displayname in `header.jsx`
        - If user is not loggedIn redirect from `/browse` to `login` page.
21. Browse Page Header UI
    - logo
    - home
    - Movies
    - My List
    - Search
    - username
    - avatar
22. unsubcribe to the `onAuthStateChanged` callback when component unmounts.
23. put image contants in one file
24. Register for TMDB API and create an application and get access token
    - generate authentication key
    - read documentaion
25. created `constants_api.jsx` and copy the api options 
25. make api call from `browse.jsx` and list down `now playing movies`
26. fetch data from TMDB API and store in redux store
27. create a custom hook and put all those api logic in that. so our code(`browse.jsx`) will be clean.
28. building browse page UI
-  Created movieSlice
- update store with now playing movies data
- planning for video container
- read first movie data from store using `nowPlayingMovies` 
- created custom hook for fetch trailer video of first movie
- update store with trailer video data
- read trailer key from store and update `VideoBg.jsx` with video
- embed youtube video using iframe and make it autoplay
- 


### begining of structure of UI  ####
1. home page
    - Header
    - login/signup form
    - redirect to browse page
2. Browse (after authentication)
    - Header
    - Main container
        - recent movie tailer in background
            - title & description
        - movie suggestions
            - movielists
                - cards
        
### ending of structure of UI  ####



### git commands:

1. git init
2. git remote add origin <URL>
3. git branch -M main
4. git push -u origin main
5. if any changes did in code do commit before `push cmd`


### form library
`Formik`

### CSS preprocessors:
 - Sass, Less, and Stylus.
### Tailwind CSS:
 - is a `PostCSS plugin`
 - Using PostCSS as your preprocessor our `builds will be faster`.
 - Tailwind often uses @tailwind, @apply, theme() keywords. To use these tailwind uses postcss.

### Post CSS:
 - is a `framework` 
 - PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) 
 - it provides `linting, minifying, inserting vendor prefixes `etc
 - it is neither a post-processor nor a pre-processor
 - is a `transpiler` like `Babel `
 - `optimizing CSS`
 - PostCSS is a tool for transforming styles with JavaScript plugins, and it is commonly used in conjunction with build tools like webpack or parcel for processing and optimizing CSS


### Autoprefixer:
- Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.
 - adds vendor prefix
        ::-moz-placeholder {
        color: gray;
        }

### formatting code in Visual Studio Code
Mac (macOS): Shift + Option + F 


Bug Fix:
1. change CSS in iframe video
2. 
