/*
@ React (vs) Angular (vs) Vue
  ? Comparison
    $ Features
      # React
          * Open-Source, front-end Javascript Library
          * Used to develop web and mobile applications
          * Developed by Facebook
          * It represents the view part of the MCV framework
      # Angular
          * Open-Source, Javascript Framework
          * Primarily aimed to develop single page applications
          * Developed by Google
          * Full-fledged MVC framework
      # Vue
          * Open-Source, Javascript Framework
          * Used to develop user interfaces and single page applications
          * Developed by Evan You, an ex Google Employee
          * It's focused on the view and model layer of the MVC framework

      ^ MVC
          = It's an architectural pattern that separates the application layer into Model, View and Controller

          ? Model - relates to all data related logic
          ? View - used for the UI logic of the application
          ? Controller - is an interface between the Model and View

    $ Use Case

    $ Performance
      # React
          * Uses Virtual DOM to fill in data in the HTML DOM
            ? B-Tree algorithm
          * A Virtual DOM only looks at the differences between the previous and current HTML and changes the part that is required to be updated
            ? Only the changed objects get updated in the Real DOM (kinda patch from V-DOM to R-DOM)

          * V-DOM makes React extremely fast
      # Angular
          * Uses the real DOM

          * This will update the entire tree structure of HTML tags until it reaches the data to be updated

          * It's time-consuming, risky and can attract a lot of bugs
      # Vue
          * Uses Virtual DOM as an adopted concept of React

          * Vue updates any altered HTML and doesn't update the entire tree

          * This ensures faster and bug-free performance

    $ Data-Binding
      ? It's a process that allows an Internet user to manipulate Web page elements using a Web Browser

      ? It's used in Web pages that contain interactive components such as forms, calculators, tutorials, and games

          # React
            * One-Way binding

            * First, the model state is updated, and then it renders the change in the UI element (view)
                & Model to View
                // View to Model

            * Improves performance since everything is modular and fast

          # Angular
            * Two-Way binding

            * Any changes made in the UI element is reflected in the corresponding model state and vice versa
                & Model to View and Vice Versa

            * This approach adversely affects the performance
          # Vue
            * Two-Way binding

            * It uses reactive two-way data binding
                & Model to View and Vice Versa

            * It automatically picks the correct way to update the element based on the input type

    $ Scripting Language
      # React (JSX)
          * It Combines UI templates and Javascript logic. The result is called JSX. React only requires the knowledge of Javascript

      # Angular (HTML)
          * Uses templates that are enhanced HTML with Angular directives. Angular requires the knowledge of the specific syntax

          * Also typescript - kinda compiled language

      # Vue (HTML-based template)
          * Vue.js templates are valid HTML that can be parsed by HTML parsers

    $ Testing
      # React
          * Jest is used by Facebook to run tests on React

          * It's embedded in every React library and requires zero configuration

      # Angular
          * It uses Jasmine to run various tests

          * The Jasmine Framework allows various functionalities to write different kinds of tests cases

      # Vue
          * Vue CLI has built-in options for unit testing with Jest or Mocha

          * Vue's "single-file components" make it straight forward to write unit tests for components in isolation

    $ Community Support
      # React
          * A few popular Github repositories on react are reactjs101, reactjs.org, reason-react, react-paginate

          * At the time of writing, there were about
            ? 1M - repos
            ? 5M - commits
            ? 1M - issues

          * Past 2 years of downloads
            ? 360M (npm-stat.com)

      # Angular
          * Angular, angular.js, angular-cli, angular-seed are a few Github repositories

          * Conversely, there were about
            ? 556k - repos
            ? 1M - commits
            ? 570k - issues

          * Past 2 years of downloads
            ? 38M (npm-stat.com)

      # Vue
          * Vue-awesome-swiper, vuejs.org, vue-apollo have gained popularity

          * It has about
            ? 308k - repos
            ? 812k - commits
            ? 302k - issues

          * Past 2 years of downloads
            ? 63M (npm-stat.com)

    $ Growth Curve
      # React
          * According to Google Trends
            ? React is much faster upwards trajectory than Angular and Vue, and which have lots much of its momentum. This indicates that React is growing faster than the other two
*/

/*
  @ React Context API (vs) Redux
    $ Context
        - It is going to be great for passing down data to deeply nested components which what it was designed for

        # If we're only using Redux to avoid passing down props, context could replace Redux - but then we probably didn't need Redux in the first place

        ~ Context also doesn't give us anything like the Redux DevTools, the ability to trace our state updates, middleware to add centralized application logic, and other powerful capabilities that Redux enables

        ? Redux is much more powerful and provides a large number of features that the Context Api doesn't provide

        ^ React Redux uses context internally but it doesn’t expose this fact in the public API

        & So we should feel much safer using context via React Redux than directly because if it changes, the burden of updating the code will be on React Redux and not us

        * Persist state to a local storage and then boot up from it, out of the box

        * Pre-fill state on the server, send it to the client in HTML, and boot up from it, out of the box

        * Serialize user actions and attach them, together with a state snapshot, to automated bug reports, so that the product developers can replay them to reproduce the errors

        * Pass action objects over the network to implement collaborative environments without dramatic changes to how the code is written

        * Maintain an undo history or implement optimistic mutations without dramatic changes to how the code is written

        * Travel between the state history in development, and re-evaluate the current state from the action history when the code changes, a la TDD

        * Provide full inspection and control capabilities to the development tooling so that product developers can build custom tools for their apps

        * Provide alternative UIs while reusing most of the business logic

          $ Having a predictable state container, handling our application's logic outside of our components, centralizing our application's state, using Redux DevTools to track when, where, why, and how our application's state changed, or using plugins such as Redux Form, Redux Saga, Redux Undo, Redux Persist, Redux Logger, etc…), then there is absolutely no reason for us to abandon Redux

          ! The Context API doesn't provide any of this

        - If we need to use middleware for various purposes
          ~ For example logging actions, error reporting, dispatching other requests depending on the server’s response, etc

        - When data coming from multiple endpoints influence single component/view

        - When we want to have greater control over actions in our applications
          ~ Redux enables tracking actions and data change, it greatly simplifies debugging

        - If we don’t want server response to directly change the state of our application
          ~ Redux adds a layer, where we can decide how, when and if this data should be applied

          ~ The observer pattern

          ~  Instead of creating multiple publishers and subscribers across the whole app, we just connect components to Redux store


    # Actually react-redux v6 is now using the new Context API!

        = redux gives us more features -> the capability of managing reducers, the dispatch function, middlewares, devtools and many more... Moreover reat-redux has some useful hidden features, like the capability to not re-render our component if the props of mapStateToProps has not changed

    & Use-context with Use-reducer to replace redux is not a good practice. Context will cause reloading of the pages, this will be identified if we look into the profiler provided by react dev tools, where as redux won't do that. Redux is better than use-context for global state management


    * With Redux we can fine-tune performance with 4 helper functions:
        ^ areStatesEqual
        ^ areOwnPropsEqual
        ^ areStatePropsEqual
        ^ areMergedPropsEqual

        - All four helpers have some reasonable default functionality we benefit from by default

        ~ With hooks we can use React.memo as explained here to improve performance, it obviously doesn't come as a default option so we need to explicitly use it

        # With Context API I wish I could say that we can use shouldComponentUpdate but I probably cannot because it belongs to React class components which are out of fashion
*/
