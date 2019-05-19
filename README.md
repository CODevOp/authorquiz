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

### Add routing
* install react router dom
    ```Powershell
    npm install react-router-dom
    ```
* configure
    ```JavaScript
    import { BrowserRouter, Route, withRouter } from 'react-router-dom';
    ```
* use
    ```Javascript
    function App() {
    return <AuthorQuiz {...state} 
        onAnswerSelected={onAnswerSelected} 
        onContinue={() => {
        state = resetState();
        render();
        }}/>;
    }

    ```
* change
    ```Javascript
    function render(){
        ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
    }
    // to
    function render(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    // and add routes
    function render() {
        ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AuthorWrapper} />
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
    }
    ```
    * Last render includes Browser Router
    * A Router may only have one child, so we use React.Fragment to represent a parent element 
### Add a Link on AuthorForm
* configure
    ```Javascript
    import { Link } from 'react-router-dom';
    ```
* use
    ```Javascript
    <Link to="/add">Add an author</Link>
    ```
### Add a Module
* Create a new file <moduleName>.js
    * import react
    ```JavaScript
    import React from 'react';
    ```
    * add new module code
    * export module
    ```JavaScript
    export default <moduleName>
    ```
    * import module to index.js
    ```JavaScript
    import AddAuthorForm from './AddAuthorForm'
    ```
#### Add form in module
* [React Form Reference](https://reactjs.org/docs/forms.html)
* Add the html form to your new module
    ```Javascript
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div >       
        </form>;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
* Add some formating
    ```Javascript
    import './AddAuthorForm.css';

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <form>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
        </form>;
    ```

    ```Javascript
    <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="bookTemp">Books</label>
                {this.state.books.map((book) => <p key={book}>{book}</p>)}
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                <input type="button" value="+" onClick={this.handleAddBook} />
            </div>
            <input type="submit" value="Add"/>
        </form>;
    ```
### Add AddAuthor Component to AuthorForm

#### Add state to the form
* add constructor
    ```javaScript
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    class <FormName>Form extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: ''
        };
        render() {
            return <form>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name}  />
            </div>
            <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl}  />
            </div>
        </form>
        }
    }    
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. Add constructor to create and initialize properties.
    2. Constructor will create state object to track changes to form.
    3. Note constructor is calling the parent class constructor with call to super.
    4. At this stage the form can be rendered but not changed because there is no event to capture the change. 

* add onFieldChange event
    ```javaScript
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    class <FormName>Form extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: ''
        };

        // event to track changes
        this.onFieldChange = this.onFieldChange.bind(this);

        // handler to update state
        onFieldChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        render() {
            return <form>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name}  onChange={this.onFieldChange}  />
            </div>
            <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl}  onChange={this.onFieldChange}  />
            </div>
        </form>
        }
    }    
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. Add an event and handler to update state.
    2. Register the event handler with form field onChange.
    3. Form data is now updated in state in preparation for submitting the form.

#### Add Submit button
* add buttons, handlers and plumbing
    ```javaScript
    // AddAuthorform.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    class <FormName>Form extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: ''
        };

        // event to track changes
        this.onFieldChange = this.onFieldChange.bind(this);
        // event to handle submit
        this.handleSubmit = this.handleSubmit.bind(this);

        // handle on submit
        handleSubmit(event) {
            event.preventDefault();
            this.props.onAddAuthor(this.state);
        }

        // handler to update state
        onFieldChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        render() {
            return <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name}  onChange={this.onFieldChange}  />
            </div>
            <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl}  onChange={this.onFieldChange}  />
            </div>
            {/* input control button */}
            <input type="submit" value="Add"/>
        </form>
        }
    }    
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // index.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const AuthorWrapper = withRouter(({ history }) => 
    <AddAuthorForm onAddAuthor={ (author) => {
        authors.push(author);
        history.push('/');
        console.log(authors);
    }} />
    );
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function render() {
        ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
            <Route exact path="/" component={App} />
            <Route path="/add" component={AuthorWrapper} />
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
    }
    ```

    1. Add a button to use to submit the form. The button is placed within the form
    2. Add bind handleSubmit. in the form add a onSubmit event binding.
    3. Add handleSubmit event. In the component code, with the onFieldChange add the event to bind the form onSubmit to a function to handle the post back index.js.
    4. Add handleSubmit function. Create function to handle submit. 
        1. The call to the event.preventDefault() is used to prevent normal form Post.
        2. onAddAuthor is a method on the component props, it is passed in from index.js.

* Add AuthorWrapper to update authors
    1. Add the method onAddAuthor to the AddAuthor component in index.js.
        1. The method is a arrow function. 
        2. author is passed.
        3. The author object is pushed to the Authors Json object. 
        4. The browsers history is updated to redirect back to the main screen.
        5. The render function is included to show AuthorWrapper is passed as a part of the route properties.

#### Add Add book to AddAuthor
* Add field to state
    ```Javascript
    // AddAuthorForm.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. The array books will hold multiple books.
    2. The field bookTemp is used to add a new book to books. 

* Add field to form to handle book list.
    ```Javascript
    // AddAuthorForm.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <div className="AddAuthorForm__input">
        <label htmlFor="bookTemp">Books</label>
            {this.state.books.map((book) => <p key={book} >{book}</p> ) }        
            <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
            <input type="button" value="+" onClick={this.handleAddBook}  />
        </div>       
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. label is for bookTemp keeping the fields together.
    2. use a propery map to display a list of books. Note according to MDN the array.map() method is used to create a new array. If the return array is ignored, it is considered an anti-pattern and they sugget a forEach or for-of. In this case the array is ignored and map is used as a forEach, creating  a list of books. 
    3. The html above also includes the input text box and an add button "+" used to add addtional books.

* Authors can have multiple books so add ability to add many books.
    ```Javascript
    // AddAuthorForm.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        this.handleAddBook = this.handleAddBook.bind(this);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    handleAddBook(event){
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. "+" button is registered to the this.handleAddBook
    2. The registered event is mapped to the handAddBook function
    3. The method handleAddBook adds a new book and clears the bookTemp field, allowing a user to add a new one. 

#### Add to the continue component
* Expand the Continue component functionality.
    ```JavaScript
    // AuthorQuiz.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function Continue({show, onContinue }) {
      return (
        <div className="row continue" >
        { show
        ? <div className="col-11" >
            <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</    button>          
            </div>
        : null  }
        </div>
      );
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
        return (
        <div className="container-fluid">
            <Hero/>
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
            <Continue show={highlight === 'correct'} onContinue={onContinue} />
            <p><Link to="/add">Add an author</Link></p>
            <Footer />
        </div>
        );
    }
    // index.js
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        
    function App() {
        return <AuthorQuiz {...state} 
            onAnswerSelected={onAnswerSelected} 
            onContinue={() => {
            state = resetState();
            render();
            }}
            />;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```
    1. The initial version of the Continue component returned an empty div.
    2. The component now takes a show boolean and onContinue function to handle the event when the contnue button is clicked. 
    3. Now when an answer is selected the continue button is displayed.
* Reset state on Continue
    1. When the continue button is clicked the state is reset and the page is rendered. This displays a new question.

## TODO: 
1. Cleanup Readme - done
2. [Learn more about Jest](https://www.sitepoint.com/test-react-components-jest/)