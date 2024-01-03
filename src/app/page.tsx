"use client";
import PdfExtractor from "../components/PdfExtractor";

export default function Home() {
  return (
    <main className="flex justify-center md:pt-14">
      <div className="flex items-center flex-col md:w-[500px] p-4">
        <h1>PDF Text Extraction</h1>
        <PdfExtractor />
      </div>
    </main>
  );
}
