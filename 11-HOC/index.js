/*
  @ Higher Order and Pure components
    ~ Higher-Order
      $ A higher-order component is a function that takes a component and returns a "new component"

      $ It facilitates reusing of component logic
          ? const NewComp = higherOrderComponent(originalComponent)

    ~ Pure Components
      $ React.Component is a the base class for React components

      $ React.PureComponnet is a variation of React.Component class and does a shallow comparison of props and state
        * Shallow comparison checks for "equality". In case of scalar attributes, it only compares their "values" and in case of "objects", it only compares their "references"

        ? Avoids unnecessary re-renders

        ? Doesn't not implement the shouldComponentUpdate method

        $ A React component can be considered pure if it renders the "same output for the same state and props"QW

*/

/*
  @ React HOC

  - Higher-Order Components (HOCs) allow developers to really take advantage and extend the functionality of their React components, but they can be cumbersome once we have more than one that we want to use within a component

  - We have to use a class component in order

  - We use the HOC by wrapping them around our components


  export default class withThis(withThat(withTheOther(MyComponent extends Component{
    ! // code goes here...
  })));

  @ A little cleaner way

    class MyComponent extends Component{
      ! // code goes here...
    }

    export default withThis(withThat(withTheOther(MyComponent)));
*/
