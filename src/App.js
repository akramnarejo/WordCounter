import "./styles.css";

import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setCount(input.length > 0 ? input.trim().split(/\s+/).length : 0);
  }, [input]);

  return (
    <div className="counter">
      <h2>Word Counter</h2>
      <textarea
        name="message"
        value={input}
        placeholder="enter your message"
        rows="10"
        cols="90"
        onChange={handleChange}
      />
      <p>words: {count}</p>
    </div>
  );
}

export default App;
