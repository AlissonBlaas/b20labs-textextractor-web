import { useCallback, useState } from "react";

import { useErrorHandler } from "@/hooks/errorHandler";
import { httpRequest } from "@/utils/api";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const useTextExtractor = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { setError, error } = useErrorHandler();

  const reportError = useCallback(
    ({ message }: { message: string }) => {
      setError(`Error: ${message}`);
    },
    [setError]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setError("");
    setFile(e.target.files[0]);
  };

  const handleExtractText = useCallback(async () => {
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await httpRequest.post(
        `${process.env.NEXT_PUBLIC_API_URL}/extract-text`,
        formData
      );
      setGeneratedText(response.data.generated_text);
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    } finally {
      setIsLoading(false);
    }
  }, [reportError, setError, file]);

  return {
    setGeneratedText,
    generatedText,
    isLoading,
    file,
    handleFileChange,
    handleExtractText,
    error,
  };
};

export default useTextExtractor;
