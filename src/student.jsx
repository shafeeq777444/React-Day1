import propTypes from "prop-types"
function Student(props){
return (
    <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.isStudent?"yes":"No"}</p>

    </div>
)
}
// its write after the function and before export
// the given type will be decleared
Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
// its working in default case
Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false
}
export default Student