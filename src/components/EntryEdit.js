import React, { useState } from "react";

const EntryEdit = ({ text, id, submit }) => {
  const [textCache, setText] = useState(text);

  const submitForm = () => {
    submit(textCache, id);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setText(value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="article"
          id="article"
          value={textCache}
          onChange={handleChange}
        />
        <input type="button" value="Submit" onClick={submitForm} />
      </form>
    </>
  );
};

export default EntryEdit;
