/*
  @ Component Lifecycle Event - Final
    $ Each component has several "lifecycle methods" that we can override to run code at particular times in the process

    - These methods are called in the following order when an instance of a component is being created and inserted into the DOM

        ^ Constructor()

        ^ getDerivedStateFromProps() - // Returns obj

        ^ Render()

    # Mounting
        - When a React element is attached to a DOM node
        - React invokes events only once

        $ componentWillMount()
        $ componentDidMount()

    # Updating
        - When a React element is updated as a result of a new value of its properties or state
        - React can invoke events many times

        $ componentWillReceiveProps(nextProps)
        $ shouldComponentUpdate(nextProps, nextState)
        $ componentWillUpdate(nextProps, nextState)
        $ componentDidUpdate(prevProps, prevState)

    # Unmounting
        - When a React element is detached from the DOM
        - React invokes events only once

        $ componentWillUnmount()

*/
