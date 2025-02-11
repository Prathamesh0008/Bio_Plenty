import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <h4>Your links is <strong className="text-green-600">invalid</strong>, So please do the re-registration and then try it.</h4>
      ) : (
        <h4>Your account has been <strong className="bg-green-600 text-white"> created suceessfully</strong>, Now you can <Link to="/login">login</Link> your account.</h4>
      )}
    </div>
  );
};

export default ActivationPage;
