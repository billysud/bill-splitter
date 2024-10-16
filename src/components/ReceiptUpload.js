import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function ReceiptUpload({ setTotalBill, setTipPercentage }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ocrResult, setOcrResult] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      handleOcr(file);
    }
  };

  const handleOcr = (file) => {
    setLoading(true);
    Tesseract.recognize(
      file,
      'eng',
      {
        logger: (m) => console.log(m), // For logging progress
      }
    )
    .then(({ data: { text } }) => {
      setOcrResult(text);
      parseReceipt(text);
      setLoading(false);
    })
    .catch((error) => {
      console.error("OCR failed: ", error);
      setLoading(false);
    });
  };

  const parseReceipt = (text) => {
    const totalMatch = text.match(/total[\s\S]*?(\d+(\.\d{2})?)/i); // Regex for "total"
    const tipMatch = text.match(/tip[\s\S]*?(\d+(\.\d{2})?)/i);     // Regex for "tip"
    
    if (totalMatch) {
      const total = parseFloat(totalMatch[1]);
      setTotalBill(total);
    }

    if (tipMatch) {
      const tip = parseFloat(tipMatch[1]);
      setTipPercentage(tip);
    }
  };

  return (
    <div className="receipt-upload">
      <label>Upload Receipt:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {loading && <p>Processing receipt, please wait...</p>}
      {image && <img src={image} alt="Receipt" width="300" />}
      <p>Extracted Text: {ocrResult}</p>
    </div>
  );
}

export default ReceiptUpload;
