const cloudinary = require("cloudinary").v2;

const cloudinary_upload = (
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

upload_up_archive = async (function_cloudinary_value, archivo, opciones) => {
  try {
    cloudinary_upload(
      function_cloudinary_value.cloud_name,
      function_cloudinary_value.api_key_name_cloudinary,
      function_cloudinary_value.api_secret_name_cloudinary
    );
    const resultado = await cloudinary.uploader.upload(archivo, opciones);
    return resultado;
  } catch (error) {
    throw new Error("Error al subir el archivo a Cloudinary");
  }
};

module.exports = upload_up_archive;
