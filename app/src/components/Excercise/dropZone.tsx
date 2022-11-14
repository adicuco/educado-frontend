
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

        <div className="p-4 w-full" >
            <div

                {...getRootProps()}
                className="w-full h-80 rounded-md cursor-pointer focus:outline-none"
            >
                <input {...getInputProps()} />


                <div
                    className={
                        "flex flex-col items-center justify-center border-2 border-dashed border-green-light rounded-x1 space-y-3" +
                        (isDragReject === true ? "border-red-500" : " ") +
                        (isDragAccept === true ? "border-green-500" : " ")

                    }
                >
                    <img src="https://icon-library.com/icon/drag-and-drop-icon-8.html.html" alt="folder" className="w-16 h-16" />
                    {isDragReject ? (
                        <p> Unfortunatly, this applications does only support video files </p>
                    ) : (

                        <>
                            <p>Choose a file or drag it here</p>

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
