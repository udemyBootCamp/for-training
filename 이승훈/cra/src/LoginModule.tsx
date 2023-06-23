import React from "react";

export const LoginModule = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      e.currentTarget.Id.value === "admin" &&
      e.currentTarget.password.value === "password"
    ) {
      alert("로그인 성공!");
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" name="Id" />
      <input type="password" placeholder="password" name="password" />
      <input type="submit" />
    </form>
  );
};
