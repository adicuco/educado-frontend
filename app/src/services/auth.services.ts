import axios, { AxiosResponse } from "axios";
import { CCApp } from "../interfaces/CCApp";

export interface ContentCreatorApplication {
  firstName: String;
  lastName: String;
  email: String;
  motivation: String;
}

// Authenticate with JWT login
const postUserLogin = async (credentials: any) => {
  return await axios.post("http://127.0.0.1:8888/api/auth/jwt", credentials);
};

const postUserApplication = async (formData: ContentCreatorApplication) => {
  return await axios.post(
    "http://127.0.0.1:8888/api/signup/content-creator",
    formData
  );
};

const GetCCApplications = async (): Promise<CCApp.RootObject> => {
  return await axios.get(
    "http://127.0.0.1:8888/api/applications?approved=false"
  );
};

const GetSingleUserApplication = async (url: string): Promise<CCApp.Datum> => {
  return await axios.get(url);
};

const PostDelcineContentCreator = async (id: string): Promise<unknown> => {
  return await axios.post(`http://127.0.0.1:8888/api/applications/${id}?action=reject`, {
    data: {
      reason: "No",
    },
  });
};

const PostAcceptContentCreator = async (id: string): Promise<unknown> => {
  return await axios.post(`http://127.0.0.1:8888/api/applications/${id}?action=approve`, {
    data: {
      reason: "Yes",
    },
  });
};

const AuthServices = {
  postUserLogin,
  postUserApplication,
  GetCCApplications,
  GetSingleUserApplication,
  PostDelcineContentCreator,
  PostAcceptContentCreator,
};

export default AuthServices;
