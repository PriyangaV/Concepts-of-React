/*
  @ React Element - Final
    ^ HTML Code - DOM

    - Browser
        ~ DOM, DOM, DOM, ... DOM

    # <h1> </h1> === document.createElement("h1");

    $ let btn = document.createElement('button');

        * btn.setAttribute('id', 'bid');

        * btn.setAttribute('class', 'bclass');

        * btn.setAttribute('width', '250px');

        * btn.setAttribute('data-comma-delimited-array', 'one,two,three,four');

        * btn.setAttribute('any-random', document.getElementsByTagName('img').length);

  @ React
    $ A library that's designed to update the browser DOM for us

    ? We don't interact with the DOM API directly

    ~ We interact with a V-DOM, or set of instructions that React will use to construct the UI and interact with the browser

    # V-DOM is made up of React elements, which conceptually seem similar to HTML elements, but are actually JS objects

  @ Element
    * React DOM is made up of React Elements

    $ A React Element is a description of what the actual DOM element should look like

    ? In simple words, React elements are the instructions for how the browser DOM should be created

    ~ React.createElement("h1", {id: "h"}, "First R-Element");

    ^ React.createElement(type(tag), {properties}, children | innerHTML);

  @ ReactDOM
    $ It contains the tools necessary to render React Elements in the browser

    > Where we'll find the render() method

    * When we have our element in the DOM we need to append this element in the DOM tree

    # React use "render()" to render DOM element

    ReactDOM.render(element, containerElement);
        - element - render on the Browser
        - containerElem - Append child element

    ReactDOM.render(h1, getElementById("container"));

  @ React Component

    class MyComp extends React.Component {
        render() {
          - // return single ReactElement
        }
    }

*/
