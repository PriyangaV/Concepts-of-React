/*
  @ Components

    ? {Components} fulfill an important concept in programming which is called "Seperation of concerns"

    $ Building blocks of applications that represent a part of the UI(Header, Section, Main, Aside, Footer - each of them treated as components)

    - JS class/function accepting properties and returning React Element that will be rendered on the page

    ? Re-Usability
          ^ A component used in one area of the application can be reused in another area. This helps speed up the development process

    ? Nested Component
        ^ A component can contain several other components

    ? Render Method
        ^ In its minimal form, a component must define a render method that specifies how the component renders to the DOM

    ? Passing Properties
        ^ A component can also receive props. These are properties passed by its parent to specify values

*/

/*
  @ Type of Components (Stateless[Functional] | Statefull[Class])

    $ Stateful Class Components

      ? Regular classes that extend the component class

      ? They must contain a render method that returns react elements(HTML) to be rendered on the browser

      ? Can be contained in a .js or .jsx file

      ? With basic definition of component, they accept props, think of them as params

      ^ Class component is also called state component as it can work with component maintained variables or states and functional one were not able to do that

      ! React(v16.8) has introduced hooks and now, functional components can equally have states like that of class component

      @ Props and State in class components

        ? Props, short for properties, is passed parameters from other component

        $ Props or Properties are a system for passing data from "parent" to "child" components

        - States are solely for the component to "remember" the values of the variables

        $ State are JavaScript objects that are relevant to a component

        # They must be initialized when they are created

        ! this.props holds all the associated properties

        ~ this.state holds all the associated states

        ? States shall be updated through this.setState() and not directly with this.state.stateName = stateValue

    $ Stateless Functional Components

      ? They are Javascript functions

      ? They return HTML

      ? Can be contained in a .js or .jsx file

      ^ Functional component is using basic function to create the component
*/

/*
  @ Stateful (vs) Stateless
    - State is similar to props, they are private to the component and it's fully controlled

    - Components can either maintain state which are Stateful or can remain stateless and contain no state in them

    - Stateless components are simple functional components which try to print something or call some parent functions through props or render always the same thing
      $ They are also called as dumb/presentational components

    - Stateful components keeps track of it's changing data. These components gets re-rendered on change of state
      $ They are also called as Container/Smart components
*/

/*
  @ Nesting components
    $ Components have to be nested into the main component using import and export keywords

    ? Export
      ^ Used to export a particular module(file) and use it in another module(file)

    ? Import
      ^ Used to import a particular module(file) and use it in existing module(file)

    # MainComponent.jsx
    # Components
      - comp1.jsx - Default Export
        * export default class Comp1 extends React.Component {}
          & Export default is used to export only one object(function, variable, calss) from the file, there can only be one default export per file
        * import Comp1 from './comp1';
          & In order to import the default export from a file, we can use only the address and use the keyword 'import' before it

          & A default exported obeject can be renamed while importing. However, while defining the component in the render method, the same name given while importing must be used
            ? import C1 from './comp1';

      - comp2.jsx - Named Export
        * Consider a class component with multiple class objects

        * export class Class1 extends React.Component {}
          & A Named Export or just export can be used to export multiple objects from a file. There can be severall named export from a single file

          & Importing named values allows the user to import multiple objects from a file. However, the names of the objects CANNOT be changed while importing
            ? import { Class1, Class2, Class3 } from './comp2';

*/

/*
  @ Component Lifecycle
    # Mounting
      componentWillMount()
          ? It's called immediately before the initial rendering occurs
            |
          render()
            |
      componentDidMount()
          ? It's invoked after React inserts the component into the DOM

    # Updation
      componentWillReceiveProps()                        setState()
          ? It's called when a component receives props       ? It's called when the state of the property changes
                      |---------------------------------------|
                  shouldComponentUpdate()
                      ? It decides whether the next component's state should trigger a re-render or not
                            |
                  componentWillUpdate()
                      ? It's invoked before rendering
                            |
                        render()
                            |
                  componentDidUpdate()
                      ? It's called after React updates the DOM

    # Unmounting
      componentWillUnmount()
          ? It's called while unmounting the component. It performs any clean up necessary
*/

/*
  @ Component Props (vs) State - Final
    # Without state our app is just a glorified static template

    ? Using state we can make our app interactive

    $ Props can't change in the context of the current component, because they're passed on component's creation

    - Props are immutable in the current component

    ^ With React component states, we can build meaningful, interactive React applications

    * State is the core concept that lets us build React components that can store data and automagically augument views based on data changes

    & React state is a mutable data store of component, self-contained functionality centric blocks of UI and logic

    > State data is often used to display dynamic information in a view to augment the rendering of views

  @ Working with State
    ~ State is not a component property it is an attribute of component, to work with the state, we can access them by name

    # An attribute of the "this.state" object

    ? If we just speficy State(singular) than this attribute refers to the individual attribute of "this.state" object in component

    $ States(plural) almost always refers to the multiple attributes of the state object of the component

  @ Access State
    * The state object is an attribute of a component and can be accessed with a this reference;
        ^ this.state.name

    # Similar the way we access props with
        ^ this.props.name

  > State
    * this.state.name
    * Mutable
    * Define states in the component itself
    * It's set and updated by the object
    * Accessible as attributes of the component class and compose components with a different representation (view)

  > Props
    * this.props.name
    * Immutable
    * Pass properties from parent components
    * Determine the view upon creation, and then they remain static
    * Accessible as attributes of the component class and compose components with a different representation (view)

*/
