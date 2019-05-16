# quantifiedSelf

## To Use the Deployed App
Visit https://quantifiedselfapp.herokuapp.com/
Add an email address, password, and password confirmation, and click `Register`.
Click `Add Meal` to add your first meal/food and start tracking calories.

## Developer Instructions

WARNING: quantifiedSelf is a the result of a temporary school project, and you are likely to encounter bugs in working with our code!

### Fork & clone the repos you'd like to work with
#### Frontend repo: https://github.com/aprildagonese/qs_frontend

PLEASE NOTE: The frontend repo requires connections to both the Calorie Tracker and Recipe Service to function. You will need to add a key from your locally-running Calorie Tracker app to your Frontend app in order to run it, and have the three apps running on separate ports on your local machine.

Ensure you have the latest version of [Node.js](https://nodejs.org/en/) installed.
Run `npm install` to install packages.
Add your Calorie Tracker key to the `key` field in every fetch call on the `src/services/calories` file.
Ensure the calorie and recipe apps are running on separate ports on your local machine.
Run `npm start` to open the app in your browser.

#### Calorie Tracker repo: https://github.com/PeregrineReed/quantified-self
#### Recipe Service repo: https://github.com/aprildagonese/qs_recipe_service

