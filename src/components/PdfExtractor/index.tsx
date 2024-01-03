import useTextExtractor from "@/hooks/api/getExtractedText";

import PdfExtactedTextContainer from "./PdfExtactedTextContainer";
import PdfExtractorInput from "./PdfExtractorInput";

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
          <button
            onClick={handleExtractText}
            className="bg-red-400 p-2 rounded-sm hover:opacity-70 max-w-40"
          >
            Extract Text
          </button>
          {generatedText && (
            <button type="button" onClick={clearText} className="ml-4">
              clearText
            </button>
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
