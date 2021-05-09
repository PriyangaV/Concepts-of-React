/*
  @ React Hooks are a way to add React.Component features to functional components

    * State
    * Lifecycle
*/

/*
  @ State in Component

  import React, { Component } from 'react';

  class AnotherComponent extends Component {
    state = {
      ...
    };

    setStateValue = () => {
      this.setState({...});
    };

    render() {
      return (
        <div>
          <h1>{this.state.stateValue}</h1>

          <button onClick={this.setStateValue}>Click Here!</button>
        </div>
      );
    }
  }
*/

/*
  @ State with Functional Components and useState

  import React, { useState } from 'react';

  function AnotherComponent() {
    const [value, setValue] = useState(0);

    return (
      <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Click Here!</button>
      </div>
    );
  }

  @ useState - object destructuring vs array destructuring
    - Array way is helpful

    - Object destructuring requires more writing to grab a variable and rename it

  @ Object Destructuring

    ! // object destructuring - lots of writing!
    const users = { admin: 'chris', user: 'nick' };

    ! // Grab the admin and user but rename them to SuperAdmin and SuperUser
    const { admin: SuperAdmin, user: SuperUser } = users;

  @ Array Destructuring

    - With array destructuring we just name variables as we get them out of the array

    # First variable is the first item in the array

    ! // array destructuring
    const users = ['chris', 'nick'];

    ! // Grab in order and rename at the same time
    const [SuperAdmin, SuperUser] = users;
*/

/*
  @ useState() - Two Variables
    - The first variable is the value (similar to this.state)

    - The second variable is a function to update that value (similar to this.setState)

    # The useState argument is the initial state value

*/

/*
  @ Why do we need HOOKS, instead of CLASSES?
    ~ Classes confuse both people and machines

    * https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines
*/

/*
  @ Using Multiple State Hooks
    - useState() multiple times in the same function

    import React, { useState } from 'react';

    function MultipleState() {
      const [value, setValue] = useState(0);
      const [value1, setValue1] = useState([{ ... }]);
      const [valu2, setValue2] = useState(null);

      return <div>
      {
        ...all those state values here
      }
        </div>;
    }
*/

/*
    @ React's Effect Hook
      - Functional components over class components
        ~ State Hook allows us to use state in React functional components

      - Functional components is lifecycle methods
        ~ Effects are similar to componentDidMount, componentDidUpdate, and componentWillUnmount

    # Side-effects are things you want your application to make like:
      ^ Fetching data
      ^ Manually changing the DOM (document title)
      ^ Setting up a subscription

      ! Effects will run after every render, including the first render

      @ Class

        import React, { Component } from 'react';

        class CrazyThings extends Component {
          componentDidMount() {
            console.log('Hello There!');
            document.title = 'Hi';
          }

          render() {
            return <div>{...}</div>;
          }
        }

      @ Functional

        function CrazyThings() {
          useEffect(() => { // (similar to componentDidMount and componentDidUpdate)
            console.log('Hello There!');
            document.title = 'Hi';
          });

          return <div>{...}</div>;
        }


      @ Running an Effect Hook only when something changes

        ~ componentDidMount: Runs once

        ! // only run on mount. pass an empty array
        useEffect(() => {
          ! // only runs once
        }, []);

        ~ componentDidUpdate: Runs on changes

        ! // only run if value changes
        useEffect(
          () => {
            ! // run here if value changes
          },
          [value]
        );

      @ componentWillUnmount()

          ~ return a function from useEffect()

          useEffect(() => {
            API.subscribe();

            ! // unsubscribe
            return () => {
              API.unsubscribe();
            };
          });

      @ Using State and Effects Together

        # Using State
          import React, { useState } from 'react';

          function GetValues() {
            const [value, setValue] = useState([]);
          }

        # Using Effect
          import React, { useState } from 'react';

          function GetValues() {
            const [value, setValue] = useState([]);

            useEffect(() => {
              fetch('api_url')
                .then(response => response.json())
                .then(data => {
                  setValue(data); // set values in state
                });
            }, []); // empty array because we only run once
          }

        # Displaying Users
          import React, { useState, useEffect } from 'react';

          function GetValues() {
            ! // ...

            return (
              <div className="section">
                {values.map(val => (
                  <div key={val.id} className="card">
                    <h5>{val.something}</h5>
                  </div>
                ))}
              </div>
            );
          }

*/
