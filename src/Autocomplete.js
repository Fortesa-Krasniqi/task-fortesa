// Autocomplete.js
import React, { useState } from "react";
import useStore from "./store";
import useAutocompleteSuggestions from "./useAutocompleteSuggestions";

const Autocomplete = () => {
  const { tags, addTag, removeTag, setCurrentInput } = useStore();
  const [input, setInput] = useState("");
  const { data: suggestions, isLoading } = useAutocompleteSuggestions(input);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setCurrentInput(value);
  };

  const handleAddTag = (tag) => {
    addTag(tag);
    setInput("");
    setCurrentInput("");
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        suggestions &&
        suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleAddTag(suggestion)}>
            {suggestion}
          </div>
        ))
      )}
      <div>
        {tags.map((tag, index) => (
          <span key={index} onClick={() => removeTag(index)}>
            {tag} x
          </span>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
