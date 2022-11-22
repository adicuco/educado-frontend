
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import StorageService from '../../services/storage.services';


function DropZoneComponent({ update: updateContentUrl }) {

    const [File, SetFile] = useState(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
        SetFile(acceptedFiles[0]);
        setTimeout(() => handleFileUpload(acceptedFiles[0]), 300)
    }, []);


    const handleFileUpload = async (file: any) => {

        if (!file) {
            alert("Please select a file")
            return
        }

        try {
            const url = await StorageService.uploadFile(file)

            // Send bucket url up to parent exercise component for saving
            updateContentUrl(url)

            alert("File uploaded successfully")

        } catch (error) {
            console.log(error);
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

        <div className="p-4  w-full flex flex-col items.center justify-center" >
            <div

                {...getRootProps()}
                className="flex flex-col items.center justify-center   w-full rounded-md cursor-pointer  focus:outline-none bg-base-100 border hover:shadow-xl "
            >
                <input {...getInputProps()} />


                <div
                    className={
                        "flex flex-col items-center justify-center border-2 border-dashed border-green-light rounded-x2 space-y-2" +
                        (isDragReject === true ? "border-red-500" : " ") +
                        (isDragAccept === true ? "border-green-500" : " ")

                    }
                >
                    <svg className="h-32 w-32 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />  <polyline points="9 15 12 12 15 15" />  <line x1="12" y1="12" x2="12" y2="21" /></svg>

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
