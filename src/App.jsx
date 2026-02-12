import { useState } from "react";

const App = ({ MIN_SIZE_MB = 1, MAX_SIZE_MB = 5 }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setErrorMsg("");
      setIsSuccess(false);
    }
  };

  const validateSelectedFile = () => {
    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      return;
    }

    const fileSizeMB = selectedFile.size / (1024 * 1024);

    if (fileSizeMB < MIN_SIZE_MB) {
      setErrorMsg(`File is too small. Minimum size is ${MIN_SIZE_MB}MB.`);
      setIsSuccess(false);
    } else if (fileSizeMB > MAX_SIZE_MB) {
      setErrorMsg(`File is too large. Maximum size is ${MAX_SIZE_MB}MB.`);
      setIsSuccess(false);
    } else {
      setErrorMsg("");
      setIsSuccess(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">File Size Validation</h1>
        </div>

        <div className="card-body">
          <p className="label">Choose File</p>

          <input type="file" onChange={handleFileChange} />

          <div className="space-between">
            <p className="info-message">Min: {MIN_SIZE_MB}MB</p>
            <p className="info-message">Max: {MAX_SIZE_MB}MB</p>
          </div>

          {isSuccess && (
            <p className="success-message">File is ready for upload!</p>
          )}
          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button className="btn" onClick={validateSelectedFile}>
            {isSuccess ? "UPLOAD" : "VALIDATE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
