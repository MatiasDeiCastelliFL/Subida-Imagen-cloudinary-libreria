const cloudinary = require("cloudinary").v2;
const configureCloudinary = (cloud_name, api_key, api_secret) => {
  cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
  });
};

const upload_up_archive = async (
  cloud_name,
  api_key,
  api_secret,
  archivo,
  config = {}
) => {
  configureCloudinary(cloud_name, api_key, api_secret);
  try {
    const ImagenSubida = await cloudinary.uploader.upload(archivo.path, config);
    return ImagenSubida;
  } catch (error) {
    throw new Error(error);
  }
};

const upload_up_archive_multiple = async (
  cloud_name,
  api_key,
  api_secret,
  imagen_multiple,
  config = {}
) => {
  configureCloudinary(cloud_name, api_key, api_secret);
  try {
    const ImagenesSubidas = await Promise.all(
      imagen_multiple.map((imagen) =>
        cloudinary.uploader.upload(imagen.path, config)
      )
    );
    return ImagenesSubidas;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { upload_up_archive, upload_up_archive_multiple };
