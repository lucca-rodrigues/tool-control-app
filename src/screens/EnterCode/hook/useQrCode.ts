import { useState } from "react";

export default function useQrCode() {
  const [openScanner, setOpenScanner] = useState(false);
  const [valueQRCode, setValueQRCode] = useState("");

  function handleCloseScannerQrCode() {
    setOpenScanner(false);
    setValueQRCode("");
  }

  function handleOpenScannerQrCode() {
    setOpenScanner(true);
    // 'setValueQRCode': manipulate according to the flow, I left it that way to facilitate the test, and validate that it is reading the QrCode
    setValueQRCode("");
  }

  return {
    openScanner,
    valueQRCode,
    handleCloseScannerQrCode,
    handleOpenScannerQrCode,
    setValueQRCode,
  };
}
