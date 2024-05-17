
const cloudinary =require("cloudinary").v2;

constconfigureCloudinary=(cloud_name, api_key, api_secret)=>{

  cloudinary.config({

    cloud_name: cloud_name,

    api_key: api_key,

    api_secret: api_secret,

  });

};

constupload_up_archive=async(

  cloud_name,

  api_key,

  api_secret,

  archivo,

  config ={}

)=>{

  configureCloudinary(cloud_name, api_key, api_secret);

  try{

    const ImagenSubida =await cloudinary.uploader.upload(archivo.path, config);

    return ImagenSubida;

  }catch(error){

    thrownewError(error);

  }

};

module.exports={ upload_up_archive };
