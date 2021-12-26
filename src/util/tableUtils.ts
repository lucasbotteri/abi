import { PrintRequestEntity } from "@service";

// eslint-disable-next-line import/prefer-default-export
export const mapPrintRequestEntityToRow = (
  printRequestEntity: PrintRequestEntity
) => ({
  ...printRequestEntity,
  key: printRequestEntity.id,
  fileCount: printRequestEntity.files.length,
});
