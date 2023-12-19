import React, { useState, useEffect } from "react";

export default function Card(props) {
  const quotes = [
    {
      quote:
        "Lucky that man whose children make his happiness in life and not his grief, the anguished disappointment of his hopes.",
      author: "Euripedes",
      category: "happiness",
    },
    {
      quote: "He who avoids complaint invites happiness.",
      author: "Abu Bakr",
      category: "happiness",
    },
    {
      quote:
        "I've gotten to a point, where I realize that happiness doesn't come from the outside.",
      author: "Ricky Williams",
      category: "happiness",
    },
    {
      quote:
        "The United States are a political state, or organized society, whose end is government, for the security, welfare, and happiness of all who live under its protection.",
      author: "William H. Seward",
      category: "happiness",
    },
    {
      quote: "Ambition is not a vice of little people.",
      author: "de Montainge, Michel",
      category: "success",
    },
  ];

  const generatequote = () => {
    console.log("clicked");
    let a = Math.floor(Math.random() * 4);
    setstatus(quotes[a].quote + " \n " + " - " + quotes[a].author);
  };

  const [status, setstatus] = useState("Welcome");
  const [number, setno] = useState(0);
  const count = 0;
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${status} times`;
  });

  return (
    <>
      <div class="card" style={{ width: "25rem", height: "25rem" }}>
        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
        <button
          type="button"
          class="btn btn-primary btn-lg pt-3"
          onClick={generatequote}
        >
          Generate quote
        </button>
        <div class="card-body">{status}</div>
        <div className="container my-3"></div>
      </div>
    </>
  );
}
