import React from 'react';
import Classes from '../EditProfile/profileimage.module.css';

const ProfileImageUpload = () => {

    const [highlight, setHighlight] = React.useState(false);
    const [preview, setPreview] = React.useState("");
    const [drop, setDrop] = React.useState(false);
  
    const handleEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("enter!");
  
      preview === "" && setHighlight(true);
    };
  
    const handleOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("over!");
  
      preview === "" && setHighlight(true);
    };
  
    const handleLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("leave!");
      setHighlight(false);
    };
  
    const handleUpload = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop!");
      setHighlight(false);
      setDrop(true);
  
      const [file] = e.target.files || e.dataTransfer.files;
  
      uploadFile(file);
    };
  
    function uploadFile(file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
  
      reader.onload = () => {
        // this is the base64 data
        const fileRes = btoa(reader.result);
        console.log(`data:image/jpg;base64,${fileRes}`);
        setPreview(`data:image/jpg;base64,${fileRes}`);
      };
  
      reader.onerror = () => {
        console.log("There is a problem while uploading...");
      };
    }

    return (
        <div className={`${Classes.profile__image__upload}`}>
             <div
                onDragEnter={(e) => handleEnter(e)}
                onDragLeave={(e) => handleLeave(e)}
                onDragOver={(e) => handleOver(e)}
                onDrop={(e) => handleUpload(e)}
                className={`${Classes.upload}${highlight ? " is-highlight" : drop ? " is-drop" : ""
                }`}
                style={{ backgroundImage: `url(${preview})` }}
            >
                <form className={`${Classes.my__form}`}>
                    <div className={`${Classes.upload__button}`}>
                        <input
                        type="file"
                        className={`${Classes.upload__file}`}
                        accept="image/*"
                        onChange={(e) => handleUpload(e)}
                        />
                        <button className={`${Classes.button}`}>Choose & Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileImageUpload;
