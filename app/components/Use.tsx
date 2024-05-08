"use client";

import React, { use, useEffect, useState } from "react";

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Use = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchPosts().then((data) => {
      setUsers(data);
      setIsLoading(false); // Move this inside the `.then()` callback
    });
  }, []);

  // const users = use(fetchPosts());

  return (
    <ul>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {users.map((user: any) => (
            <div
              key={user.id}
              className="bg-blue-50 shadow-md p-4 my-6 rounded-lg"
            >
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </>
      )}
    </ul>
  );
};

export default Use;
