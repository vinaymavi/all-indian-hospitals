`This page only to record my daily progress notes.`

# 17-July-2017
* React and ReactDOM are to separate libraries that required to render react component, in old ReactDom was part of React.
* A react component could be a state full and state less, 
State full has a render method that should has a return statement.
State less could be simple function with return statement and we can access passed attribute as in props attribute.
* A Component can we combination of multiple components.
* to include a class attribute in JSX we used **className** because class is reserved for JavaScript.

# 19-July-2017
* JSX is an syntactic sugar to create react component, every JSX statement convert into React component,
Its is recommend we should user capital case for React components because JSX convert small case to regular html elements.
* JSX can have JavaScript expressions with **{}** syntax.
* JSX can create component with **.(<MyComponentCol.Comp1/>)** notation.
* JSX can consume array directly `{items}`.
## NOTES
* We can use live babel live transpiler to test JSX conversion to React - https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2017%2Creact%2Cstage-0&targets=Node-7.4&browsers=&builtIns=false&debug=false&code_lz=MYewdgzgLgBACgQwOYEswKi8MC8MAUADgE4iEQCUOAfDAN4BQMzMokshyAphLjJ8QhcAkmChFS5AHRQQUBABsYAen6SIUzki4KuYCgG4mLAG4JiMFFC4BbXngDaAXSMsYAMxAX8u2Cj4AjAaWMAA8eFo8wSgA1DEU9MZuzFa2GoQArhAAFvihqXbUdCgAvqHKBRDUhkkwJbXEXFAZxGAEtW6hGQpFlWXK3dS1FAwlRkA
  
# 22-July-2017  
 * When we register a listener to a child element by passing listener from parent element, we have problem of **this** scope
to avoid this we need to **bind** listener function.
 * A react component has **Mounting** >> **Updating** >> **UnMounting** states and each state has some events like 
 **componentWillMount,componentDidMount,componentWillUnMount**.
 * We can update ReactComponent by calling **render method again**
 * We can define type of properties by **<CompnentName>.propTypes:{"key":React.PropType.<type>}**
 * We can share information/logic between two components by **props(parent child)** **by parent property(for sibling)** 