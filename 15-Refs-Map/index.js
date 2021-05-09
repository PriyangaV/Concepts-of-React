/*
  @ React Refs - Need to be updated
    * Refs make it possible to access DOM nodes directly within React

    $ We want to change the value of an <input> element, but without using props or re-rendering the whole component - refs are good for this

      ? Create Ref
        constructor() {
          this.textInput = React.createRef();
        }

      ? Use Ref hook
        const textInput = useRef();

      ? Get Ref value
        {this.textInput.current.value}

      ? Passing Callback to function to ref
        <input type="text" ref={element => this.textInput = element} />

      ? The ref attribute as a string
        <input type="text" ref="textInput" />

      ? Forwarding a ref from one component to another
        const Input = React.forwardRef((props, ref) => (
          <input type="text" ref={ref} />
        ));


*/

/*
  @ Map
    - React Map function is slightly different than the normal JavaScript map function because it is made to return and render JSX elements
*/

/*
  @ Button Click
    - If we want a non-button element to operate like a button, we need to make its "role" property set to "button"
*/
