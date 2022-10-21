export declare module CCApp {
  export interface Datum {
    createdAt: Date;
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    motivation: string;
    __v: number;
    approved: boolean;
  }

  export interface Headers {
    contentLength: string;
    contentType: string;
  }

  export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
  }

  export interface Env {
    FormData?: any;
  }

  export interface Headers2 {
    Accept: string;
  }

  export interface Config {
    transitional: Transitional;
    transformRequest: any[];
    transformResponse: any[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Env;
    headers: Headers2;
    method: string;
    url: string;
  }

  export interface Request {}

  export interface RootObject {
    data: Datum[];
    status: number;
    statusText: string;
    headers: Headers;
    config: Config;
    request: Request;
  }
}
