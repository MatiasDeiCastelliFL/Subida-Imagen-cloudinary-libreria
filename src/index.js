import { v2 as cloudinary } from "cloudinary";

const cloudinary_upload = async (
  cloud_name_cloudinary,
  api_key_name_cloudinary,
  api_secret_name_cloudinary
) => {
  return cloudinary.config({
    cloud_name: cloud_name_cloudinary,
    api_key: api_key_name_cloudinary,
    api_secret: api_secret_name_cloudinary,
  });
};

const upload_up_archive = async (archivo, opciones) => {
  try {
    const resultado = await cloudinary.uploader.upload(archivo, opciones);
    return resultado;
  } catch (error) {
    throw new Error("Error al subir el archivo a Cloudinary");
  }
};

export default { upload_up_archive };
