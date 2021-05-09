/*
  @ React pre-requisites
    $ It's assumed that, we are familiar with
      - HTML, CSS, JS, ES6 (concepts like functions, objects, arrays and to lesser extent, classes)
      - Programming Concepts - JS
      - Basic idea of framework/library
*/

/*
  @ Why need library or framework?
    - Anyone can create a solution with basic HTML, CSS and JS only
    - But as the solution/website gets bigger, working with basic elements of the web becomes really impossible
    - Also, the web is going to be viewed on multiple OS, browers and devices

    $ Patches and industry acceptability is also an advantage

    $ Getting help from the community is also another advantage of framework/libraries

    $ Companies are more interested and favoring developers who are well versed on the current technologies
*/

/*
  @ What is React?
    $ It's a javascript library for building fast and interactive user interfaces for the web as well as mobile applications

    $ It's an open-source, reusable component-based front-end library

    $ MVC - In a MVC architecture, React is the 'View' which is responsible for how the app looks and feels

    ? React was created by Jordan Walke, who was a software engineer at Facebook!

    ^ React divides the UI into multiple components, which makes the code easier to debug, and each component has its own property and function

    - Easier to pick as it's more relevant to the HTML Style
*/

/*
  @ Why React?
    - $ Easy creation of dynamic web applications

    $ Performance enhancements
      ? One-Way data binding
      ? Virtual DOM

    $ Reusable components

    $ Unidirectional data flow

    $ Small learning curve

    $ Can be used for mobile apps (React Native)

    $ Dedicated tools for easy debugging

*/

/*
  @ Features of React
    $ JSX
      ? It's a syntax extension to Javascript. It's used with React to describe what the User Interface should look like

        ? By using JSX, we can write HTML Structures in the same file that contains Javascript code

        ^ JSX helps in making the code easier to understanc and debug as it avoids usage of JS DOM structures which are rather complex

        ! It's a combination of
          # JS + HTML = JSX
              * const simple = <h1>Hello Universe!</h1>;

    $ Virtual DOM
      ? DOM - Document Object Model
          * It treats an XML or HTML document as a tree structure in which each node is an object representing a part of the document
              # Document
                $ Root Element (<html>)
                    = Element (<head>)
                      ^ Element (<title>)
                          ? Text ("My Title")
                    = Element (<body>)
                      ^ Element (<a>)
                          * Attribute ("href")
                          ? Text ("My Link")
                      ^ Element (<h1>)
                          ? Text ("My Header")

        ? Virtual DOM
          * It's the "exact copy" of the real DOM

          $ React keeps a lightweight representation of the Real DOM in the memory, and that's known as the Virtual DOM

          $ Manipulating Real DOM is much slower than manipulating Virtual DOM, because nothing gets drawn onscreen

          $ When the state of an object changes, Virtual DOM changes only that object in the real DOM instead of updating all the objects

          # It's compared to its previous state and then React gets to know which objects have changed

          * React's one-way data binding keeps everything modular and fast

          * A unidirectional data flow means that when designing a React app we often nest child components within parent components

    $ Extensions
        * React goes beyond simple UI and has many extensions for complete application architecture support

        * It provides server-side rendering
          ^ App runs in the server rather than browser

        * Supports mobile-app development (React Native)
          ^ Using javascript only
          ^ It's a REAL mobile app and NOT just a web app running on mobile!

          ? 1000s of apps are using React Native, from established Fortune 500 companies to hot new startups!
              $ Facebook, Instagram, Skype, Pinterest, Tesla

        * Extended with Flux and Redux, among others
          ^ Flux is the application architecture that Facebook uses for building web applications

          ? It implements unidirectional data-flow which makes it easier to deduce what's going on

              # Action -> Dispatcher -> Store -> View -> Action
                = When we trigger an action, the dispatcher will get notified

                = Once the dispatcher has dealt with an action, the stores listening to it get triggered
                  & Store - holds the data of the application

                = The view gets updated when the state of the store changes

                = User action at the view is sent to dispatcher to be processed

    $ Debugging
        * React applications are extremely easy to test due to a large developer community

        * Facebook even provides a small browser extension that makes React debugging faster and easier
*/

/*
  @ Build Blocks of React
    $ Components
        ? Components are the building blocks of any React application, and a single app usually consists of multiple components

        ? A component is essentially a piece of the User Interface
          ^ It's like a function that returns HTML elements

        ? It splits the User Interface into independent, reusable pieces that can be processed separately

        * A component is implemented as a Javascript class having some state and a render method
          class Simple extends React.Component {
              state = {};
              render() {
                return (
                    <div>
                      <h1>Hello</h1>
                    </div>
                );
              }
          }

          # State - is the data that we want the component to render

          # Render Method - is responsible for how the User Interface looks and feels to the user

    $ State
        * State of a component is an object that holds some data

        * This data influences the output of a component

        * State change - Component Re-render

    $ Props
        * Short for properties, that allow us to pass arguments or data to components

        * Props are passed to components in the way similar to that of HTML-tag attributes

          App.js
              <h1>{this.props.carProp}</h1>

          Main.js
              <App carProp="1600 CC" />
*/
