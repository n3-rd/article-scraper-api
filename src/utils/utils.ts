import { uploadFile } from "@uploadcare/upload-client";

export const upload = async (file: File) => {
  const fileData = await uploadFile(file, {
    // eslint-disable-next-line @typescript-eslint/quotes
    publicKey: "327f735b29694386bf56",
  });
  return fileData;
};
