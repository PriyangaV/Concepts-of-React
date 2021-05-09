/*
  @ React Router - Need to be updated
    - There are multiple types of routers that "react-router-dom" provides aside from BrowserRouter

    - It's a common practice to alias (rename) BrowserRoute as simply 'Router' when it is imported

    ~ Route Component
      $ We declare routes within the Router component as children with two props to each route
        # path, component or render

        ? Path - Specifies on what path of our app a given route is located

        ? Component | Render - Are used to display a specific component for our path

          - Component props can only receives a reference to a given component

          - Render is more typically used for applying some conditional logic to render one route one component or another

    ~ Switch Component
      - Switch component looks through all of its child routes and it displays the first one whose path matches the current url

      $ If for some reason we do want multiple pages to be displayed at the same time, we might consider not using the switch component

    ~ 404 Route (*)

    ~ Link Component
      - Link component allows us to provide some inline styles just like any standard React component

    ~ NavLink Component
      - If we are on the current path that the link points to, this allows us to create some active link styles to tell our users, by looking at our link, what page they're on
        $ There is also an activeClassName prop which can be set as well if we do not want to include inline styles or want more reusable styles to perform the same function as activeStyle

    ~ Redirect Component (a private route)

    ~ useHistory Hook
      - We can call it up at the top of any component that is declared within our router component and get back history data, which includes information such as the location associated with our component

    ~ useLocation Hook
      - The useLocation hook includes all of the same information that the useHistory hook does

      - This is important to note that if we need both location data and to use history to programmatically navigate our user, make sure to useHistory

      # If we only want location data, all we need to do is call useLocation

    ~ useParams Hook + Dynamic Routes
      - We can access any route params of a declared route with its associated component using the useParams hook

    ~ useRouteMatch Hook
      - If we want to know whether the given component is on a certain page, we can use the useRouteMatch hook

      - This is helpful in conditions in which we want to show something specific, based off of whether we're on a certain route or not

*/

/*
  @ React Router DOM - Advanced Code Ninjas - Reacttraining.com - Final

    * 3 Levels of Router
        $ Router
          ? Browser Router - HTML5 History object
          ? Hash Router
          ? Memory Router
        $ Switch
          ? Switch looks through its children <Route>s and renders the first and that matches the current URL
        $ Route
          # Route Props
              ^ component, render, path, exact, strict, children

  @ How Redux Works
    # View Component -> Event (Store.Dispatch) -> Dispatch() -> Action -> Listen (Middlewares-Saga -> next() -> ...) -> Listen -> Reducer -> New State -> Store.State -> Redux.connect() -> View Component
*/
