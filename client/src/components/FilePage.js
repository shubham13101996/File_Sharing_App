import { useState, useEffect, useRef } from "react";
import "../App.css";
import { uploadFile } from "../services/api";

function FilePage() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  const url =
    "https://media.istockphoto.com/id/1217481380/vector/video-call-conference-working-from-home-social-distancing-business-discussion-colleagues.jpg?s=612x612&w=0&k=20&c=p0JTRko123n-AuOSrWfyxAYq_-_6gje9QJoTiI7tD6E=";

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getFile();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <img src={url} className="img" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default FilePage;
