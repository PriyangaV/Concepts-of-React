/*
  @ John Denning - Youtube - utah js non-profit org - V-DOM - Final

  * Setting up a react project takes less than 5 minutes
    $ Code Pen
    $ VS Code
        ? Webpack / Babel

  * The react api was inspired by the 1995 DOM API

  * React doesn't create the VIRTUAL DOM. We do!!!
    $ DOM / Shadow DOM / Virtual DOM

    ? Virtual DOM - React Elements Tree
        # All of our JSX
          const virtualDOM = <button>B</button>

          ! Storing JSX in a variable
          ! The result of JSX called ReactElements
          ! ReactElements are Virtual DOM
          ! Virtual DOM is an object, that's it!

          & React is taking the plain js object (V-DOM) and turning this object into Real DOM

          = Virtual DOM is an object representing what we want in the Real DOM

          > React does the job what we want in the REAL DOM

          ^ Virtual DOM is an object with all our HTML in it and then React create its REAL DOM from it

  * Multiple calls to usestate rely on call order
    $ useState
    $ useEffect

  * The react reconciler is the real reason that we use react
    ? Reconciler is the function that's given Virtual DOM and produces Real DOM

  * React is faster than Preact (and YoshiDOM)
        $ React - 150kb
        $ Preact - 50kb

        # Performance
          ? Initial load (Preact is good)
          ? Everything after that (React is good)

*/
