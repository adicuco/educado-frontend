import axios, { AxiosResponse } from "axios";
import { CCApp } from "../interfaces/CCApp";

export interface ContentCreatorApplication {
  firstName: String;
  lastName: String;
  email: String;
  motivation: String;
}

// Authenticate with JWT login
const postUserLogin = async (props: any) => {
  return await axios.post("http://127.0.0.1:8888/api/jwt/login", props);
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

const PostDelcineContentCreator = async () => {
  return await axios({
    method: "post",
    url: "http://127.0.0.1:8888/api/applications/633abffea7f3c71cf7dbc111?action=approve",
    data: {
      reason: "No",
    },
  });
};

const PostAcceptContentCreator = async () => {
  return await axios({
    method: "post",
    url: "http://127.0.0.1:8888/api/applications/633abffea7f3c71cf7dbc111?action=reject",
    data: {
      reason: "Yes",
    },
  });
};

const AuthServices = {
  postUserApplication,
  GetCCApplications,
  GetSingleUserApplication,
  PostDelcineContentCreator,
  PostAcceptContentCreator,
};

export default AuthServices;
