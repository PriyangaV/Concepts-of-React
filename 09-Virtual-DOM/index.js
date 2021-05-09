/*
  @ Virtual DOM, Reconciliation, Diffing Algorithm, React is so fast

  ? What is DOM
    $ DOM stands for Document Object Model

    $ It is the hierarchical representation of our web page(UI)

    $ DOM manipulation is very slower

    $ The whole DOM (UI) needs to be repainted because of that one little change

    $ This change is very expensive in terms of time complexity

  ? Reconciliation
    $ Virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM
      - This process is called Reconciliation

    $ Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen

    $ Think of Virtual DOM as the blueprint of a machine, changes made to the blueprint doesn't reflects on the machine itself

  ? How it works
    $ When there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM

      # Diffing
        - With the help of this comparison React figures out which components in the UI needs to be updated

          ~ This process is called diffing

        - The algorithm that is used for the diffing process is called as the diffing algorithm

    # Once React knows which components has been updated, then it replaces the original DOM nodes with the updated DOM node

  @ Initial DOM
    <section>
        <div>
          <h1>Hello React</h1>
        </div>
        <div>
          <h1>Hello React 2</h1>
        </div>
    </section>

  @ Updated DOM
    <section>
      <div>
        <h1>Hello React</h1>
      </div>
      <div>
        <h1>Hello React 5</h1>
      </div>
    </section>

  $ It only updates the content of the second div in the real DOM

  # This process is fast as only a single node had to change as opposed the whole repainting of the UI

  @ If DOM elements are added
    <section>
        <div>
          <h1>Hello React</h1>
        </div>
        <div>
          <h1>Hello React 5</h1>
          <h2>Hello React 17<h2>
        </div>
    </section>

    $ Only a node has been added to the second div so React just adds it to the real DOM

  @ Adding element at the top
    <section>
      <div>
        <h1>Hello React</h1>
      </div>
      <div>
        <h2>Hello React 17<h2>
        <h1>Hello React 5</h1>
      </div>
  </section>

  $ Virtual DOM would repaint the whole second div as when it tries to compares it with the pre-updated virtual DOM then in second div the first child was h1 and now it is h2 so it doesn't just add the new element instead it replaces the whole div element

  # Imagine that instead of just the two elements inside the second div tag we have 1000's of hierarchical components
    - It will re-render those 1000's of components which didn't changed

  # To solve this issue React supports a key attribute
    - When the children of the React components have keys, React uses the keys to match children in the pre-updated virtual DOM

    <section>
      <div>
        <h1 key="as231">Hello React</h1>
      </div>
      <div>
        <h2 key="12dsa">Hello React 17<h2>
        <h1 key="asddda">Hello React 5</h1>
      </div>
    </section>

  @ When using keys
    - React keys should be different in sibling components, not globally
    - We can also pass the array index as the key
    - We can also pass the id received from the database

  ! React uses the Virtual DOM which keeps the re-painting of the DOM as less as possible

  @ Recap

  $ Frequent DOM manipulations are expensive

  $ Virtual DOM is a virtual representation of DOM in memory

  $ Virtual DOM is synced with real DOM with ReactDOM library - This process is called Reconciliation

  $ React compares the Virtual DOM and pre-updated Virtual DOM and only marks the sub-tree of components that are updated - This process is called diffing

  $ The algorithm behind diffing is called Diffing algorithm

  $ React uses keys to avoid unnecessary re-renders

  @ Discussion
    - Virtual Dom is slower than the actual DOM and vanilla DOM manipulation
      $ https://dev.to/inhuofficial/comment/1e04n
*/

/*
Outline
distinct roles
reason1
  - Advantages of a whole framework - same convention throughout the app
reason2
distinct features
reason3

library and framework

fw - requires conventions to be followed
ly - a view can be impoted in any existing project
*/

/*
  @ Virtual DOM - Final
    $ DOM - Document Object Model
        ? Used to create a Nodes using JS

        # It's a heart of modern interactive web

        = Using a single DOM is lot slower than the js operations

    $ Virtual DOM
        ? In every JS there is a corresponding Virtual DOM

        # It's an object identical to the Javascript Object

        # It's simply a representation of a JS DOM object like, a lightweight copy

        # It has the same power and has properties and methods like the DOM object

        * It's like a blue print where we can decide to move kitchen besides the hall but not actually move it, because it's just a blue print

        ^ Manipulation V-DOM is much faster than manipulation Real DOM

        > Once React V-DOM updated, then React compares V-DOM with V-DOM snapshot that was taken right before the update by comparing the V-DOM with pre-updated version, to check which V-DOM objects have changed
          # DIFFING Process

          $ React maintains 2 V-DOM, once with updated state V-DOM and other previous state V-DOM

          # Once React knows which V-DOM needs to be updated with Real-DOM, updates start


  @ Process of V-DOM to R-DOM
    * The entire V-DOM gets updated
    * The V-DOM gets compared to what it looked like before we updated it
    * React Figures out which objects have changed
    * The changed objects, and the changed objects only, get updated on the Real-DOM
    * Changes on the real DOM cause the screen to change
        > This process is known as "Reconciliation"

*/
