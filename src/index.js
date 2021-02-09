import React, { useState } from "react";
import useFileReader from "./useFileReader";
import "./style.css";

const prefix = 'rc-input-file';

export default function RcInputFile({children}) {
  const [image, progress, fileReader] = useFileReader();
  const [fileInput, setFileInput] = useState(null);

  function selectFile(e) {
    const target = e.target,
          files = target.files

    if (files.length < 1) return;

    fileReader(files);
  }

  function saveFileInput(node) {
    setFileInput(node);
  }
  function onClick(e) {
    if (!fileInput) {
      return;
    }

    fileInput.click();
  }
  
  return(
    <div>
      <span onClick={onClick}>
        <input accept='image/*' ref={saveFileInput} onChange={selectFile} type='file' style={{display: 'none'}}/>
        {children}
      </span>
      {
        progress && <div>
          {progress && <div className={`${prefix}-progress`}>
            <span style={{width: `${progress}%`}}></span>
            <span>{progress}%</span>
          </div>}
          {image}
        </div>
      }
    </div>
  );
}

RcInputFile.defaultProps = {
  children: [React.createElement('button', {className: `${prefix}-button`}, 'Click to Upload')]
}