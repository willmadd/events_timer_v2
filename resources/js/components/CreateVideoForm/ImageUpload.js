import { useDropzone } from "react-dropzone";
import React, {useCallback} from 'react'

const ImageUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {

        const cb = (file) =>{
console.log(file)
        }
        // Do something with the files
        console.log(acceptedFiles)
        getBase64(acceptedFiles, cb)
    }, []);

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
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
                <h4>Position of feartured Image</h4>
            <div className="featuredimage__position">
                <div >
                <input type="radio" name="position" id="left"/>
                <label htmlFor="left">Left</label>
                </div>
                <div>
                <input type="radio" name="position" id="centre"/>
                <label htmlFor="centre">Centre</label>
                </div>
                <div>
                <input type="radio" name="position" id="Right"/>
                <label htmlFor="Right">Right</label>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
