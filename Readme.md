
const cloudinary = require("cloudinary").v2;

/**

* Configura Cloudinary con las credenciales proporcionadas.
* @param {string} cloud_name - El nombre de la nube de Cloudinary.
* @param {string} api_key - La clave API de Cloudinary.
* @param {string} api_secret - El secreto API de Cloudinary.
  */
  constconfigureCloudinary = (cloud_name, api_key, api_secret) => {
  cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
  });
  };

/**

* Sube un archivo a Cloudinary.
* @param {string} cloud_name - El nombre de la nube de Cloudinary.
* @param {string} api_key - La clave API de Cloudinary.
* @param {string} api_secret - El secreto API de Cloudinary.
* @param {string} archivo - La ruta del archivo a subir.
* @param {Object} config - Opciones de configuración adicionales (opcional).
* @returns {Promise`<Object>`} Una promesa que resuelve con el resultado de la carga.
  */
  constupload_up_archive = async (
  cloud_name,
  api_key,
  api_secret,
  archivo,
  config = {}
  ) => {
  configureCloudinary(cloud_name, api_key, api_secret);
  try {
  constImagenSubida = await cloudinary.uploader.upload(archivo.path, config);
  returnImagenSubida;
  } catch (error) {
  thrownewError(error);
  }
  };

module.exports = { upload_up_archive };
