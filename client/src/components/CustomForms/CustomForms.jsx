import React from "react";

const CustomForms = () => {
  return (
    <form action="#">
      <div className="field">
        <label for="name">Your name: </label>
        <input type="text" placeholder="John Smith" />
        <div className="help">
          Don't worry, your information is safe with us.
        </div>
      </div>
      <div className="field">
        <label for="email">Email ID: </label>
        <input type="email" placeholder="john@email.com" />
      </div>
      <div className="field">
        <label for="name">Country: </label>
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <div className="field">
        <label for="textarea">Textarea:</label>
        <textarea
          className="textarea"
          placeholder="e.g. Hello world"
        ></textarea>
      </div>
      <button type="button">Button</button>
      <p>
        You can use the color utilities to mix and match your own styles of
        elements. For example:
      </p>
      <button
        type="button"
        className="bg-green white border border--black lighten"
      >
        Custom button
      </button>
    </form>
  );
};

export default CustomForms;
