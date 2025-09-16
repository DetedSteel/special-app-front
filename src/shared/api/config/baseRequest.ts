import { envConfig } from "../../envConfig";
import { axiosInstance } from "./axiosConfig";

interface BaseApiRequestOptions {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: object;
  signal?: AbortSignal;
  params?: string[][] | Record<string, string> | string | URLSearchParams;
  headers?: Record<string, string>;
}

export const baseApiRequest = async <T>({
  url,
  method,
  data,
  signal,
  params,
  headers,
}: BaseApiRequestOptions): Promise<T> => {
  const urlParams = new URLSearchParams(params);

  const apiUrl = `${envConfig.apiUrl}${url}`;
  const response = await axiosInstance({
    method,
    url: apiUrl,
    params: urlParams,
    data,
    signal,
    headers: headers,
    withCredentials: true,
  });

  return response.data;
};
