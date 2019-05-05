# React Fundamentals from pluralsight course

## References
    [Pluralsight Course](https://app.pluralsight.com/library/courses/react-fundamentals-update/exercise-files)
## Commands
### Install create-react-app and create new application
```Powershell
npm i -g create-react-app
create-react-app AuthorQuiz
```
### 
```Powershell

setup GIT
    git config --list 
    # use :q to quit
    git config --list --show-origin

    git init
    git add .
    git commit -m "Initialization of Repository"
    git remote add origin "https://github.com/CODevOp/authorquiz"
    git remote -v // gives information about remote

    // from github or repository create new repository
    git pull origin master --allow-unrelated-histories // pulls allows combining new branch from remote with license or other items like .gitignore, etc

    git push -u origin master
```
### 
```Powershell

npm start


```
### added bootstrap 
*  Save a bootstrap css to the application
    * Navigate to get cdn https://getbootstrap.com/
    * Locate the bootstrap cdn source and open it
        * https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
    * Save the css as bootstrap.min.css into the src folder.
*  Add the css file to your AuthorQuiz.js file
    ```Javascript
     import './bootstrap.min.css' file
    ```
### testing with Jest
*  Find references for and documenation
    * [Jest Documentation](https://jestjs.io/)
*  Run test 
    ```Powershell
    npm test
    ```
*  Add enzyme to app for testing
    ```Powershell
    npm install --save-dev enzyme
    npm install --save-dev enzyme-adapter-react-16
    ```
### Bootstrap Classes
```javascript
    use <div className="container-fluid">
```
### Add underscore to app 
* [underscore](https://www.npmjs.com/package/underscore)
* Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.
* Install 
    ```Powershell
    npm i underscore
    ```

## TODO: 
    (1) Cleanup Readme
    (2) [Learn more about Jest](https://www.sitepoint.com/test-react-components-jest/)