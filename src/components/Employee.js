function Employee(props){
    return (
        <div>
            <h3>Employee {props.name}</h3>
            <p>{props.role ? props.role : "None roles"}</p>
        </div>
        
    )
}

export default Employee;