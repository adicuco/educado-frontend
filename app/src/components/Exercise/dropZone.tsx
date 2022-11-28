
import { Video } from 'aws-sdk/clients/rekognition';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import StorageService from '../../services/storage.services';


function DropZoneComponent({ update: updateContentUrl, props }) {

    const [File, SetFile] = useState(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
        SetFile(acceptedFiles[0]);
        setTimeout(() => handleFileUpload(acceptedFiles[0]), 300)
    }, []);


    const handleFileUpload = async (file: any) => {

        const KEY = `${props.exerciseId}.${file.name.split('.').pop()}`

        if (!file) {
            alert("Please select a file")
            return
        }

        try {
            await StorageService.uploadFile({ file, key: KEY })

            // Send bucket url up to parent exercise component for saving
            updateContentUrl(KEY)

            alert("File uploaded successfully")

        } catch (error) {
            console.log(error);
            alert("File upload failed");
        }
    }


    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        isDragReject,
        isDragAccept,
    } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'video/mp4': []
        }


    });

    return (

        // w-full flex flex-col items-center justify-center
        //border-green-light 
        <div className="py-2 " >
            <div

                {...getRootProps()}
                className="rounded-md cursor-pointer  focus:outline-none bg-base-100 border hover:shadow-xl " >
                <input {...getInputProps()} />


                <div
                    className={
                        "flex flex-col items-center justify-center border-4 border-dashed rounded-x2 space-y-2" +
                        (isDragReject === true ? "border-red-500" : " ") +
                        (isDragAccept === true ? "border-green-500" : " ")

                    }
                >
                    <svg className="h-32 w-32 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />  <polyline points="9 15 12 12 15 15" />  <line x1="12" y1="12" x2="12" y2="21" /></svg>

                    {isDragReject ? (
                        <p> Unfortunatly, this applications does only support video files </p>
                    ) : (

                        <>
                            <p>Drag and drop Files Here to Upload</p>

                            <p className="mt-2 text-base text-gray-300">Only video files supported</p>


                            {
                                File ? File.name : "Please select a file"


                            }
                        </>

                    )}
                </div>
            </div>
        </div>
        //     {/* <button onClick={() => handleFileUpload(File)}> Upload</button>
        //  */}

    );
};

export default DropZoneComponent;
