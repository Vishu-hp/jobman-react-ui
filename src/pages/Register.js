import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(`${name}:${value}`);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out fields");
      return;
    }

    if (isMember) {
      dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );
      return;
    }

    dispatch(
      registerUser({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field  */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field  */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* password field  */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
