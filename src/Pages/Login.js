import React, {useState, useEffect} from 'react'
// import '../css/login.css'
import useForm from './../helpers/UseForm';
import validate from '../helpers/ValidationRules';

const Login = (props) => {
    const {values, errors, handleSubmit, handleBlur} = useForm(validate);
    const [state, setState] = useState({})

    useEffect(() => {
        !values && setState({...values});
    }, [values]);

    const submitForm = (e) => {
        handleSubmit(e);
        if (!Object.keys(errors).length && Object.keys(values).length) {
            props.history.push('/list');
        }
    }
    
    return (
        <div className="log-form">
            <h2>Login to your account</h2>
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={state.username} 
                    onBlur={handleBlur}
                    onChange={handleBlur}
                    className={`${'input-text'} ${errors.username ? 'input-error': ''}`}
                />
                {errors.username && (
                    <div
                        className={errors.username ? 'error': ''}
                    >
                        {errors.username}
                    </div>
                )}
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={state.password}
                    onBlur={handleBlur}
                    onChange={handleBlur}  
                    className={`${'input-text'} ${errors.password ? 'input-error': ''}`}
                />
                {errors.password && (
                    <div
                        className={errors.password ? 'error': ''}
                    >
                        {errors.password}
                    </div>
                )}
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login;