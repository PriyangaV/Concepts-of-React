/*
  @ Props and States

    - {Props} are custom attributes, equivalent of arguments in Javascript
      $ String - Wrap it in a set of quotes

      $ Dynamic Value - Wrap it in a set of Curly Braces

    - Parent Component (Props) | (State - Parent)
      $ Child Component (Props - Data from Parent) (State - Child)

    - {State} means of managing our application data and also allows React to update our UI (user interface) in response to data changes

      $ State updates with useState are not merged

      $ State hooks trigger a re-render, useRef does not

      ! Whenever we update state, it not only causes a re-render in the component that directly manages the state, it also causes a re-render in all child components

      $ State updates should be immutable(the concept of immutability)

      ! If we update state with plain JavaScript and not setState, it will not trigger a re-render and React will not display those (invalid) changes in state to our user

      $ State updates are asynchronous and scheduled

      ! It accepts a new state value and enqueues(doesn't re-render the component immediately) a re-render of the component

      $ The setState function does not immediately update state, it merely schedules a state update for some time in the future

      ! Stale state can happen with closures
        ~ Stale state is a problem that occurs whenever we're trying to update state, often within a closure
          # A closure is a type of function in JavaScript, where we're using a variable from an outer scope

      > If nothing is returned from this function, then no re-render is going to take place whatsoever

*/

/*
  @ Props
      $ Props, short for properties, allow the user to pass arguments or data to components

      $ It helps make components more dynamic

      $ Parent to Child

      $ Props are passed to components in the way similar to that of HTML-tag attributes

      $ Props in a component are read-only and cannot be changed
*/
