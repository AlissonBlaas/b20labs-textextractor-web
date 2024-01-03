import useTextExtractor from "@/hooks/api/getExtractedText";

import PdfExtactedTextContainer from "./PdfExtactedTextContainer";
import PdfExtractorInput from "./PdfExtractorInput";
import Button from "../Button";

const PdfExtractor = () => {
  const {
    setGeneratedText,
    generatedText,
    handleExtractText,
    file,
    isLoading,
    handleFileChange,
    error,
  } = useTextExtractor();

  const clearText = () => {
    setGeneratedText("");
  };

  return (
    <div className="w-full">
      <div className="bg-slate-800 p-4 rounded-md my-4">
        <PdfExtractorInput
          handleFileChange={handleFileChange}
          file={file as File}
        />
        <div>
          <Button
            onClickButton={handleExtractText}
            text="Extract Text"
            variable="button"
            disabled={isLoading}
          />
          {generatedText && (
            <Button variable="text" onClickButton={clearText} text="clearText" />
          )}
        </div>
        {error && <div className="text-red-700">{error}</div>}
      </div>
      <PdfExtactedTextContainer
        generatedText={generatedText}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PdfExtractor;
