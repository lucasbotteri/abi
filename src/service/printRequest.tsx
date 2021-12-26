/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref, uploadBytes } from "firebase/storage";
import { FormFile } from "@util";
import { firestorage, firestore } from "app/firebase";
import { addDoc, collection, CollectionReference } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

const COLLECTION_NAME = "print_request";

export type PrintRequestEntity = {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  observations: string;
  files: string[];
};

export type CreatePrintRequestEntity = Omit<PrintRequestEntity, "files" | "id">;

const printRequestCollection = collection(
  firestore,
  COLLECTION_NAME
) as CollectionReference<PrintRequestEntity>;

export const createPrintRequest = async (
  printRequestToCreate: CreatePrintRequestEntity,
  files: FormFile[]
) => {
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

export const useGetPrintRequests = () =>
  useCollectionDataOnce(printRequestCollection, { idField: "id" });
