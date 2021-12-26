/* eslint-disable import/prefer-default-export */
import { UploadFile } from "antd/lib/upload/interface";

export type SideType = "singleSided" | "doubleSided";
export const isSideType = (value: string): value is SideType =>
  value === "singleSided" || value === "doubleSided";

export type FormFile = {
  id: string;
  name: string;
  fileObject: File;
  pages?: number;
  ringed: boolean;
  sideType: SideType;
};

export const getFilePages: (file: UploadFile) => Promise<number | undefined> = (
  file
) => {
  return new Promise((resolve, reject) => {
    if (file.originFileObj) {
      const reader = new FileReader();
      reader.readAsBinaryString(file.originFileObj);

      reader.onloadend = () => {
        const readerResult = reader.result;
        if (typeof readerResult === "string") {
          const pageCount = readerResult.match(
            /\/Type[\s]*\/Page[^s]/g
          )?.length;

          resolve(pageCount);
        } else {
          resolve(undefined);
        }
      };
      reader.onerror = (ev) => {
        reject(new Error(ev.toString()));
      };
    } else {
      resolve(undefined);
    }
  });
};

export const mapAntFileToFormFile = async (
  file: UploadFile
): Promise<FormFile> => {
  const pages = await getFilePages(file);
  const fileObject = file.originFileObj;
  if (!fileObject) {
    throw new Error("Error with file");
  }

  return {
    id: file.uid,
    name: file.originFileObj?.name ?? "",
    fileObject,
    pages,
    ringed: false,
    sideType: "singleSided",
  };
};

export const mapAntFilesToFormFiles = (files: UploadFile[]) =>
  Promise.all(files.map(mapAntFileToFormFile));
