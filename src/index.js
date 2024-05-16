const cloudinary = require("cloudinary").v2;

const cloudinary_upload = async (
  cloud_name_cloudinary,
  api_key_name_cloudinary,
  api_secret_name_cloudinary
) => {
  try {
    await cloudinary.config({
      cloud_name: cloud_name_cloudinary,
      api_key: api_key_name_cloudinary,
      api_secret: api_secret_name_cloudinary,
    });
  } catch (error) {
    throw new Error("Error configuring Cloudinary");
  }
};

const upload_up_archive = async (cloud_name, api_key, api_secret, archivo) => {
  try {
    await cloudinary_upload(cloud_name, api_key, api_secret);
    const resultado = await cloudinary.uploader.upload(archivo);
    return resultado;
  } catch (error) {
    throw new Error("Error al subir el archivo a Cloudinary");
  }
};

module.exports = { upload_up_archive };
