/*
  @ How React state is actually updated
    - State can be created and updated with the useState and useReducer hooks

    - It's better to use multiple effects instead of one

    - Don't optimize functions that update state (useState, useReducer)

    - React guarantees that setState function identity is stable and won't change on re-renders

    - This is why it's safe to omit from the useEffect or useCallback dependency list

    - The ref object that's created by useRef is a generic container with a current property that's mutable and can hold any value

    - As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree
*/

/*
  $ A state is an object that "stores the values" of properties belonging to a component that could change over a period of time

      $ A state can be modified based on the user action or network changes

      $ Everytime the state of an object changes, React re-renders the component to the browser

      $ The state object is initialized in the constructor

      $ A state object can store "multiple properties"

      $ this.setState() is used to change the value of the state object

      $ setState() function performs a shallow merge between the new and the previous state
*/

/*
  @ Props vs State
      # Props
        ? Used to pass data and event handlers to its children components

        ? Props are immutable - Once set, props cannot be changed

        ? Props can be used in both functional and class components

        ? Props are set by the parent component for the children components

    # State
        ? Used to store the data of the components that has to be rendered to the view

        ? State holds the data and can change over time

        ? State can only be used in class components

        ? State is generally updated by event handlers

        $ State can be updated in response to event handlers, server responses or props changes
          = This is done using 'setState' method
              # this.setState({ key: value })

          * setState() method "enqueues" all the updates made to the component state and instructs React to "re-render" the component and its children with the updated state
*/
