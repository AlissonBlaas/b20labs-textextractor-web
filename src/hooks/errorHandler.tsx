import { useState } from "react";

export const useErrorHandler = () => {
  const [error, setError] = useState<string>("");

  return { setError, error };
};
