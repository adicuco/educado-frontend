import axios from 'axios'

interface ContentCreatorApplication {
    firstName: String,
    lastName: String,
    email: String,
    motivation: String,
  }
  
const postUserApplication = async (formData: ContentCreatorApplication) =>  {
    
    return await axios.post(
        'http://127.0.0.1:8888/api/signup/content-creator', 
        formData
    );
}


const AuthServices = {
    postUserApplication,
};

export default AuthServices;