import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.username.trim()) {
            isValid = false;
            newErrors.username = "Username is mandatory";
        }

        if (!formData.password.trim()) {
            isValid = false;
            newErrors.password = "Password is mandatory";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setMessage(
                formData.username === "admin" && formData.password === "admin"
                    ? "Valid Credentials"
                    : "Invalid Credentials"
            );
        }
    };

    return (
        <div className="container text-center">
            {message && <p>{message}</p>}
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;