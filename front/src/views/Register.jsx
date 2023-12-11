import { Link } from "react-router-dom";
import React, { createRef, useState } from "react";
import axiosClient from "../axiosClient.js";
import { useStateContext } from "../context/ContextProvider.jsx";

const FormTable = () => {
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        // console.log(payload);
        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };
    return (
        <div className="flex flex-row  justify-center">
            <div className="flex-col">
                <h1 className="text-center text-xl font-mono">Free Register</h1>
                {errors && (
                    <div className="text-rose-800">
                        {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}
                <form onSubmit={onSubmit}>
                    <InputField Ref={nameRef} type="text" place="yagya" />
                    <InputField Ref={emailRef} type="email" place="yagya@mail.com" />
                    <InputField Ref={passwordRef} type="password" place="password" />
                    <InputField
                        Ref={passwordConfirmationRef}
                        type="password"
                        place="Password Confirmed"
                    />
                    <button className="flex items-start border border-slate-800 bg-slate-400 hover:bg-slate-600 p-3 rounded-2xl">
                        Register
                    </button>
                    <p className="message text-center text-xl">
                        Already registered?{" "}
                        <Link className="text-slate-700 hover:text-slate-400" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ place, Ref, type }) => {
    return (
        <input
            className="p-3 bg-slate-600  my-3 rounded-md border-slate-600"
            ref={Ref}
            type={type}
            placeholder={place}
        />
    );
};

export default function Register() {
    return (
        <div className="flex-row flex justify-center h-screen my-12">
            <FormTable />
        </div>
    );
}
