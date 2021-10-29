import "./styles.css";

import React, { useState } from "react";

function Contacts() {
  const [input, setInput] = useState({ firstName: "", lastName: "" });
  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleClick = () => {
    if (input.firstName !== "" && input.lastName !== "") {
      setContacts((prevContacts) => [...prevContacts, input]);
      setInput({ firstName: "", lastName: "" });
    } else {
      alert(` ${input.firstName === "" ? "first" : "last"} name is required.`);
    }
  };
  return (
    <div>
      <input
        name="firstName"
        value={input.firstName}
        onChange={handleChange}
        placeholder="first name"
      />
      <br />
      <input
        name="lastName"
        value={input.lastName}
        onChange={handleChange}
        placeholder="last name"
      />
      <br />
      <button onClick={handleClick}>Add Contact</button>
      <br />
      {contacts.map((contact) => (
        <p>
          {contact.firstName} {contact.lastName}
        </p>
      ))}
    </div>
  );
}

export default Contacts;
