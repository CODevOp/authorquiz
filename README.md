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
* Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects. shuffle and sample are used from this library to sort and randomly choose a author. 
* Install 
    ```Powershell
    npm i underscore
    ```

### Install some test librares to work with Jest the default React test library.
* Install enzyme to get better error messages from Jest tests
    ```Cmd
    npm install enzyme --save-dev
    npm install enzyme --save-dev
    ```
    * Install the [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) for Visual Studio Code. 
* Prepare
    ```Javascript
    import Enzyme, {mount, shallow, render} from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    Enzyme.configure({ adapter: new Adapter() });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // incomplete code
    ```
* Use
    * mount function to render the page
    ```javascript
    // incomplete code
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("when no answer has been selected", () => {
        let wrapper;
        beforeAll( () => {
        wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
        })
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
    ```
    * Create a new state, where testing can start drilling down into the functionality of the site. Before each test, We need load the initial page state and start testing it is correct. 
    * To render the page state use enzymes mount fuction to return the page.

    * Jest.fn() and simulate a click
    ```Javascript
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    describe("when the correct answer has been clicked", () => {
        let wrapper;
        const handleAnswerSelected = jest.fn(); // 1
        
        beforeAll( () => {
        wrapper = mount(<AuthorQuiz {...Object.assign({}, state, {highlight: 'correct'})} onAnswerSelected={handleAnswerSelected} />); //2
        wrapper.find('.answer').first().simulate('click');  //3
        });
        
        it("onAnswered should be called", () => {
        expect(handleAnswerSelected).toHaveBeenCalled(); // 4
        });    

        it("should receive The Shining", () => {
            expect(handleAnswerSelected ).toHaveBeenCalledWith("The Shining") //5
        });
    });
    ```
    * change empty object for onAnswerSelected to a jest function, allowing a click simulation
    1. declare jest function handle as a javascript const. 
    2. pass handle to onAnswerSelected
    3. simulate the click
    4. test the answer was selected
    5. answer contains "The Shinning"

## TODO: 
    (1) Cleanup Readme - done
    (2) [Learn more about Jest](https://www.sitepoint.com/test-react-components-jest/)