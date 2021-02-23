import { useDropzone } from "react-dropzone";
import React, {useCallback} from 'react'

const ImageUpload = ({setFeatureImage, setFeatureImgPos, featureImgPos}) => {

    const onDrop = useCallback((acceptedFiles) => {
        getBase64(acceptedFiles)
    }, []);

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onloadend = function () {
            setFeatureImage(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    const { getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
        onDrop,
        accept:"image/png, image/gif image/jpg image/jpeg",
        minSize:0,
        maxSize:4194304
    });
    return (
        <div className="featuredimage">
            <h3>Step 2. Upload a feature Image</h3>
            <div className="droparea">
                <div {...getRootProps()} className={`root__drop ${isDragActive?'drag':''}`}>
                    <input {...getInputProps()} />
           
                      {!isDragActive && <p>{'Click here or drop a file to upload!'}</p>}
                      {isDragActive && !isDragReject && <p>{"Drop it like it's hot!"}</p>}
                      {isDragReject && <p>{"File type not accepted, sorry!"}</p>}    
                
                </div>
            </div>
                <p className="featuredimage__caption">{'Accepts .png .jpg & .gif files under 4mb'}</p>
            <div className="featuredimage__position">

                <h4>Position of featured image</h4>
                <div >
                <input type="radio" name="position" id="left" onChange={()=>setFeatureImgPos('left')} checked={featureImgPos==="left"}/>
                <label htmlFor="left">Left</label>
                </div>
                <div>
                <input type="radio" name="position" id="center" onChange={()=>setFeatureImgPos('center')} checked={featureImgPos==="center"}/>
                <label htmlFor="center">Center</label>
                </div>
                <div>
                <input type="radio" name="position" id="Right" onChange={()=>setFeatureImgPos('right')} checked={featureImgPos==="right"}/>
                <label htmlFor="Right">Right</label>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
