import React, { useEffect, useState } from "react";

const prefix = 'rc-input-file';

export default  function useFileReader() {
  const [allFiles, setAllFiles] = useState(null);
  const [progress, setProgress] = useState(null);
  const [blobData, setBlobData] = useState(null);
  useEffect(() => {
    if (allFiles) {
      for (let key in allFiles) {
        if (allFiles.hasOwnProperty(key)) {
          const file = allFiles[key];

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            //load
            setBlobData(prev => (<div className={`${prefix}-loaded-image`}>
                <img src={reader.result} alt=''/>
                <span>{file.name}</span>
              </div>)
            );
          };

          reader.onprogress = function (even) {
            if (even.lengthComputable) {
              setProgress(null);
              const progress = parseInt((even.loaded / even.total) * 100);
              setProgress(progress);
            }
          };

          reader.onerror = function () {
            //error
            console.log(reader.error);
          };
        }
      }
    }
  }, [allFiles]);
  return [blobData, progress, setAllFiles];
}