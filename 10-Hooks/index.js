/*
  @ React Hooks - Need to be updated
    ~ Introduced in React Version 16.8

    - Let us use state and other React features in a Functional Component

    # Hooks are the functions which literally, Hook Into, React state, and lifecycle features from functional components

    ? How it works?
      $ Closure - Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

      $ It let us use the functions instead of switching between HOCs, Classes, and functions

      $ As Hooks are regular Javascript functions, thus we can use the built-in Hooks and create our own custom one

    ? Remember always
      - Hooks should always be called at the Top Level
        $ We are making sure that Hooks are always called in the same order as they were declared each time our component renders

        $ (Remember that don't ever call the hooks inside the functions that are nested and also inside the loops)

      - Hooks should always be called from React Functions

        $ Don't call Hooks from regular JavaScript functions, instead we can
          # Call Hooks from React Function components

          # Call Hooks from custom Hooks

    ~ Advantages of Hooks in React
      - Easier to test and work with

      - They avoid juggling HOCs, render props, children as functions, and classes

      - Code has Separate (and isolated) concerns

      - Better code modification than classes

      - Hooks also avoid duplicate logic between lifecycle method and components

    ~ Basic Hooks in React
      $ useState
      $ useEffect
      $ useContext

      # useState()
        - A new way of declaring a state in React app

        - Used for setting and retrieving state

        - During the initial render, the returned state is initialState

        ! setState function is used to update the state

        - It accepts a new state value and enqueues a re-render of the component

        ~ MUST import useState from React before using the setState function

      # useEffect()
        - It allows us to perform side effects (in action) in the functional components

        - It does not use components lifecycle methods that are available in class components

        - Allows to perform some actions, such as:
          $ Updating the DOM
          $ Fetching and consuming data from a server API
          $ Setting up a subscription

        ! useEffect accepts a function that is used to cause an effect in the function
          # The second parameter can be passed as an empty array if you want the function to run only once

        ~ There are two types of effect hooks in React, namely:
          > Effects without Cleanup
          > Effects with Cleanup

      # useContext()
        - useContext accepts a context object i.e. the value returned from React.createContext and returns the current context value for that context

        - A component calling useContext will always re-render when the context value changes

        - Context defined will be available to all the child components without involving “props”

        ! The only thing to watch out for is that you have to pass the whole context object to useContext – not just the Consumer!

*/
