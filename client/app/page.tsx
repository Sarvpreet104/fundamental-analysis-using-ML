"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <div>
      <h1>Hello Sarv!</h1>
      <p>{data}</p>
    </div>
  );
}
