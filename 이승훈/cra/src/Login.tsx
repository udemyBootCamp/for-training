import React from "react";

export const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" className="Id" />
      <input type="password" placeholder="password" className="password" />
      <input type="submit" />
    </form>
  );
};
