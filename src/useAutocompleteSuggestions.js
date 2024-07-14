// useAutocompleteSuggestions.js
import { useQuery } from "react-query";

const fetchSuggestions = async (input) => {
  const response = await fetch(`YourAPIEndpoint?query=${input}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function useAutocompleteSuggestions(input) {
  return useQuery(["autocomplete", input], () => fetchSuggestions(input), {
    enabled: !!input, // Only fetch when input is not empty
  });
}
