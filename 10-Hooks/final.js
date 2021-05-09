/*
  @ Why React Hooks? Hooks - Final
    * Why does this thing exist?

    * What problems does this thing solve?

    # Historical Context

    $ constructor
        ^ super(props)

        ? AutoBinding
          ~ this.method = this.method.bind(this)

    $ Class Fields
        // super(props)

        // bind()
          - Arrow Function

    $ Duplicate Logic

    $ Sharing non-visual Logic
        - State - UI

    $ No copy-paste

    $ HOC Introduced
        export default withHover (
          withTheme(
              withAuth(
                withRepos(Profile)
              )
          )
        )

        # Wrapper Hell

        <withHover>
          <withTheme>
              <withAuth hover="" theme="">
                <withRepos hover="" theme="" auth>
                    <Profile repos={[]} auth theme hover />
        ? More than 1 HOC? :think:

        # Current State
          * We use classes for React Components cause that's what made the mose sense at that time

          ? But, calling super(props) is annoying

          ~ No one knows how "this" works

          ^ I know, how "this" works, but it's an unnecessary hurdle for some

          $ Organizing our comps by lifecycle methods forces us to sprinkle related logic throughout our components

          = React has no good primitive for sharing non-visual logic

    # We need a
        * Simple
        * Composable
        * Flexible
        * Extendable

    ~ SOLUTION - Here comes the "HOOKS"

    > Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function
          # John Carmack, Oculus VR CTO

    & We need,
        - State
        - Lifecycles
        - Sharing Non-Visual Logic

    const loadingTuple = useState(true); // single arg - initial state
    const loading = loadingTuple[0];
    const setLoading = loadingTuple[1];

    ...

    loading; // true
    setLoading = false;
    loading; // false


    $ So, no more "React.Component"
        - only "Function"

    ^ // Array Destructuring
        const [loading, setLoading] = useState(true);
          @ This solves "State" problem
              # USE-STATE

    $ No more Lifecycles - which forces us to sprinkle related logic
        - Only Synchronization
          # Fetch Data, Update DOM, Initial State
              @ useEffect
                ~ Lets us perform side effects in function components
                    > Takes 2 arguments(fn, optional-array)
                * Function
                    ^ Defines which side effect to run
                * Array - (Optional)
                    ^ Defines one to resync or rerun the effect

    useEffect(() => {
        document.title = `Hello, ${username}`
    }, [username])
        - useEffect will run whenever 'username' changes therefore syncing the document.title whatever" Hello username" resolves to

        @ This solves "Lifecycles" problem
              # USE-EFFECT

    $ Traditionally, React couples UI to a component
        - Which led to over complicated patterns
          ~ HOC or Render Props

        @ Custom Hooks
          - To decouple from any UI


    function useRepos(id) {
        const [repos, setRepos] = useState([]);
        const [loading, setLoading] = useState(true);

        React.useEffect( () => {
          setLoading(true);

          fetchRepos(id)
              .then(repos => {
                setRepos(repos);
                setLoading(false);
              })
        }, [id])

        return [loading, repos];
    }

    funtion ReposGrid ({id}) {
        const [loading, repos] = useRepos(id);
        ...
    }

    funtion Profile ({user}) {
        const [loading, repos] = useRepos(user.id);
        ...
    }

    @ This solves "Sharing Non-Visual Logic" problem
        # CUSTOM-HOOKS


  * State lives in a class constructor

  * Wrapper Hell

  * Hooks are PRIMITIVES | Building Blocks

  * Hooks always starts with "use", cause we're using SuperPower();

  * Works only in Top-Level functions, doesn't work inside regular JS functions, Nested Functions, Loops,
    ^ EXCEPT when used with "CUSTOM HOOKS"

    # useState() - Final
        - When data changes re-render the UI
          $ Options args (Default | Initial state)

        - [ReactiveValue/State, Setter] = useState(0);

    # useEffect()
        $ componentDidMount() - Initialized
        $ componentDidUpdate() - State Updated
        $ componentWillUnmount() - Destroyed

          * Run - When Mounted, When State Changes

        useEffect(() => {
          fetch('foo').then(() => setLoading(true))
        })
        ! // Infinite Loop

        useEffect(() => {
          fetch('foo').then(() => setLoading(true))
        }, [])

        ! // Dependencies, empty means run once

        useEffect(() => {
          alert();

          return () => alert("Bye!!!")
          ! // Run, before component is removed from UI
        })

    # useContext()
        - Share data without passing props

        const moods = {
          happy: 'h',
          sad: 's'
        }

        const MoodContext = createContext(moods);

        function App(props) {
          return (
              <MoodContext.Provider value={moods.happy}>
                <MoodEmoji />
              </MoodContext.Provider>
          )
        }

        function MoodEmoji() {
          const mood = useContext(MoodContext);

          ! // Consume value from nearest parent provider

          return <MoodContext.Consumer>
              { ({mood}) => <p>{mood}</p> }
          </MoodContext.Consumer>
        }

    # useRef()
        - Grab native HTML elements from JSX

        function App() {
          const myBtn = useRef(null);
          const clickIt = () => myBtn.current.click()

          return (
              <button ref={myBtn}></button>
          )
        }

        function App() {
          const count = useRef(0);

          ! // Mutable value does NOT re-render UI

          return(
              <button onClick={() => count.current++}>
                {count.current}
              </button>
          )
        }

    # useReducer()
        - Redux, a different way to manage state, similar to useState

        function reducer(state, action) {
          switch(action.type) {
              case 'increment':
                return state + 1;
              case 'decrement':
                return state - 1;
              default:
                throw new Error();
          }
        }

        function App() {
          // const [state] = useReducer();
          // const [state, dispatch] = useReducer();
          // const [state, dispatch] = useReducer(reducer);
          const [state, dispatch] = useReducer(reducer, 0); // With initial state

          ! // Takes 2 args [ReactiveState, fn(dispatch an Action)]
              ^ ACTION
                ~ type: string
                ~ payload: any (optional)

          return (
              <>
                Count: {state}
                <button onClick={ () => dispatch({type: 'decrement'})}> - </button>
                <button onClick={ () => dispatch({type: 'increment'})}> + </button>
              </>
          )
        }

        * Action -> Reducer -> Store -> UI -> Action

        $ Click -> Filter -> DB -> Page -> Action

    # useMemo()
        - Memoization, cache result of function call

        function App() {
          const [count, setCount] = useState(60);

          // const expensiveCount = useMemo();

          const expensiveCount = useMemo( () => {
              return count ** 2;
          }, [count]);

          ! // Dependencies: Recompute, when count changes

          $ Instead of recomputing on every render, we can memoize the value

          ! // Caution: Use only as needed for expensive calculations

          return <></>
        }

    # useCallback()
        - Memoizing the entire function instead of computation/return value

        $ Defining a function in a component, new function object is created each time component rerenders

        function App() {
          const [count, setCount] = useState(60);

          const showCount = () => {
              alert(`Count ${count})`
          }

          const showCount = useCallback(() => {
              alert(`Count ${count})`
          }, [count]);

          return <> <SomeChild handler={showCount} /> </>

          ! // Especially with big lists
        }

    # useImperativeHandler()

        function App() {
          const ref = useRef(null);

          return <CoolButton ref={ref}></CoolButton>
        }

        function CoolButton(props, ref) {
          const myBtn = useRef(null);

          useImperativeHandle(ref, () => {
              click: () => {
                console.log('Clicking');
                myBtn.current.click();

                ! // Modify the exposed ref
                    - // * Rare Use-Case
              }
          });

          return (
              <button ref={myBtn}></button>
              ! // Forward reference to element
          )
        }

        CoolButton = forwardRef(CoolButton);

    # useLayoutEffect()
        - Runs - After render but before painting to screen

        ! // Caution: Blocks visual updates until our callback is finished

        function App() {
          const myBtn = useRef(null);

          useLayoutEffect(() => {
              const rect = myBtn.current.getBoundingClientReact();

              console.log(rect.height);
          })

          return <><button ref={ref}></button></>
        }

    # useDebugValue()
        - Own custom hooks from scratch
        - Add custom labels in React Dev Tools

        function App() {
          // const [displayName, setDisplayName] = useState();

          // useEffect( () => {
          //    const data = fetchFromDatabase(props.userId);
          //    setDisplayName(data.displayName);
          // }, []);

          const displayName = useDisplayName();

          return <button>{displayName}</button>
        }

        function useDisplayName() {
          const [displayName, setDisplayName] = useState();

          useEffect( () => {
              const data = fetchFromDatabase(props.userId);
              setDisplayName(data.displayName);
          }, []);

          useDebugValue(displayName ?? 'loading...')

          return displayName;
        }
*/
