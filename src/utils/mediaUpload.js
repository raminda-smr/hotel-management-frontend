import app from "../config/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app, "gs://" + import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);


export default function uploadMedia(file) {
    if (file == null) {
        return;
    }

    const fileRef = ref(storage, file.name);

    return uploadBytes(fileRef, file)
}