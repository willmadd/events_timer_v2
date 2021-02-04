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


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <div className="featuredimage">
            <h3>Step 3. Upload a featured Image</h3>
            <div className="droparea">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>
                            Drag 'n' drop some files here, or click to select
                            files
                        </p>
                    )}
                </div>
            </div>
                <h4>Position of featured image</h4>
            <div className="featuredimage__position">
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
