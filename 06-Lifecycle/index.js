/*
  @ Lifecycle in Component

    - Stages at which components are created, updated and destroyed

      $ Initialize, Mount, Update, Unmount

    ~ Constructor | Initialize
      - The genesis of the component creation

      - Initializes the process

      # We shall not call or update anything in this phase

    ~ ComponentWillMount() | Mounting
      - Will be called right before the "render()" in the class

      - Gonna give us a chance if there is anything we'd like to do right before the rendering is fired

      # Nothing related to the mounting action shall be done here, like calling API or updating states shall not be done in this state

    ~ ComponentDidMount() | Mounting
      - As the name implies, this one is called right after the component is mounted

      - Mounted meaning, it is on DOM and is part of the page to be rendered

      - The right place to do anything related to rendering updates or calls like the API call or updates on the state as needed for initial phase

      # One of the most common method being used as far the lifecycle is concerned

    ~ ShouldComponentUpdate() | Upate
      - Update/Re-render is expensive, this is where we'll be able to check if we have to do the update or not

      - Provides previous props and state values for us to check

      # These are passed as parameter to shouldComponentUpdate(prevProps, prevState, snapshot)

    ~ ComponentWillUpdate() | Upate
      - Right before the update is taking place

      - Accepts the nextProps and nextStates as parameter

      # Calculate / Rearrange before the component got updates can be performed here

    ~ ComponentDidUpdate() | Upate
      - As the name implies, this is when the component is fully updated

      # It gives us the chance to any action right after it's updated in the DOM

    ~ ComponentWillUnmount() | Unmounting
      - The last place for the component life cycle where it is going to be closed

      - The where any cleaning related to the network or closing of opened sessions or data will happen

      # This instance of the component won't be mounted again once it's unmounted

*/
