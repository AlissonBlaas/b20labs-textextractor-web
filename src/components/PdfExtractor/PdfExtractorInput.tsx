import React, { ChangeEvent } from "react";

interface IPdfExtractorInput {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  file: File;
}

const PdfExtractorInput = ({ handleFileChange, file }: IPdfExtractorInput) => {
  return (
    <div className="my-4 bg-gray-500 p-2 rounded-sm w-full grid place-items-center">
      <input
        type="file"
        onChange={handleFileChange}
        name="imageUpload"
        id="imageUpload"
        accept=".pdf"
        className="hidden"
      />
      <label htmlFor="imageUpload" className="cursor-pointer">
        {file ? file?.name : "upload a PDF"}
      </label>
    </div>
  );
};

export default PdfExtractorInput;
