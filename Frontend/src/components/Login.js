import React from "react";

const Login = () => {    
    const [data, setData] = React.useState({ email: '', password: '' });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        console.log(`Sending request...`);
        console.log(options.body);
        fetch("/api/login", options)
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
                console.log(data)
            });
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email">Email:</label><br/>
                <input type="text" onChange={handleChange} id="fname" name="email"/><br/>
                <label for="password">Password:</label><br/>
                <input type="password" onChange={handleChange} id="lname" name="password"/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
}

export default Login;