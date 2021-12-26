import { ref, uploadBytes } from "firebase/storage";
import { FormFile } from "@util";
import { firestorage, firestore } from "app/firebase";
import { addDoc, collection } from "firebase/firestore";

const COLLECTION_NAME = "print_request";

export type PrintRequestEntity = {
  name: string;
  phoneNumber: string;
  address: string;
  observations: string;
};

// eslint-disable-next-line import/prefer-default-export
export const createPrintRequest = async (
  printRequestToCreate: PrintRequestEntity,
  files: FormFile[]
) => {
  const printRequestCollection = collection(firestore, COLLECTION_NAME);
  const uploadFilesPromise = files.map((file) => {
    const storageRef = ref(firestorage, file.id);
    return uploadBytes(storageRef, file.fileObject);
  }, []);
  const filesUploaded = await Promise.all(uploadFilesPromise);

  const documenToSave = {
    ...printRequestToCreate,
    files: filesUploaded.map((file) => file.ref.fullPath),
  };

  return addDoc(printRequestCollection, documenToSave);
};
