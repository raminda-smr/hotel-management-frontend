import app from '../config/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

export default function UploadMediaFile(file) {

    // Create a storage reference
    const storageRef = ref(storage, 'uploads/' + file.name);

    // Upload the file and return a promise
    return uploadBytes(storageRef, file)
        .then(
            (snapshot) => {
                console.log('Uploaded a blob or file!', snapshot);
                // Get the file's download URL
                return getDownloadURL(snapshot.ref);
            }
        )
        .then(
            (downloadURL) => {
                console.log('File available at', downloadURL);
                return downloadURL; // This is the full URL to access the file
            }
        )
        .catch(
            (error) => {
                console.error('Error uploading file:', error);
            }
        );
}