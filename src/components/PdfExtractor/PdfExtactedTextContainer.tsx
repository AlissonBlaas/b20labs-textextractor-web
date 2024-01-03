import React from "react";

interface IPdfExtactedTextContainer {
  generatedText: string;
  isLoading: boolean;
}

const PdfExtactedTextContainer = ({
  generatedText,
  isLoading,
}: IPdfExtactedTextContainer) => {
  return (
    <div className=" bg-slate-100 text-stone-600 p-4 rounded-md">
      {generatedText ? (
        <strong>Generated Text</strong>
      ) : (
        <strong>A simple pdf text extractor with openAi</strong>
      )}
      {isLoading ? <p>Loading...</p> : <p>{generatedText}</p>}
    </div>
  );
};

export default PdfExtactedTextContainer;
