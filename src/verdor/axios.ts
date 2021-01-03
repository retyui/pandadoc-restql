import axios, { AxiosInstance } from "axios";
import debug from "debug";
import qs from "qs";

const isObject = (value: unknown): boolean =>
  value !== null && typeof value === "object";

const loggerRequest = debug("axios:request");
const loggerData = debug("axios:data");

function paramsSerializer(params?: Record<string, any>) {
  if (!params) return "";
  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key]) || isObject(params[key])) {
      params[key] = JSON.stringify(params[key]);
    }
  });

  return qs.stringify(params);
}

const injectInterceptors = (client: AxiosInstance): AxiosInstance => {
  client.interceptors.request.use((config) => {
    // @ts-expect-error
    config.hrstart = process.hrtime();
    let msg = `⬜️  ${config.method} ${config.baseURL}${config.url}`;
    if (config.params) {
      msg += `?${paramsSerializer(config.params)}`;
    }
    loggerRequest(msg);
    return config;
  });

  client.interceptors.response.use((res) => {
    const { status, config } = res;
    const { url, method, params } = config;
    const colorStatus = status === 200 ? `✅ ` : `❌ ${status}`;
    let msg = `${colorStatus} ${method} ${url}`;
    if (params) {
      Object.keys(params).forEach((paramName) => {
        const val = params[paramName];
        msg += `\n    ${paramName}=${val}`;
      });
    }

    loggerRequest(msg);
    if (status !== 200 && loggerRequest.enabled) {
      // display error with regular request
      loggerRequest(JSON.stringify(res?.data, null, 2));
    } else {
      loggerData(JSON.stringify(res?.data, null, 2));
    }

    // @ts-expect-error
    if (res?.config?.vendorRequests) {
      // @ts-expect-error
      const hrduration = process.hrtime(res.config?.hrstart);

      // @ts-expect-error
      res.config.vendorRequests.push({
        // @ts-expect-error
        hrstart: res.config?.hrstart,
        hrduration,
        duration: hrduration[0] + Math.round(hrduration[1] / 1000000) / 1000,
        status: res.status,
        url: `${url}?${paramsSerializer(res.config.params)}`,
        size: res?.headers?.["content-length"],
      });
    }

    if (res.status !== 200) {
      if (res?.data?.errorDescription) {
        throw new Error(`PandaDocServerError: ${res?.data?.errorDescription}`);
      }
      if (res?.data?.error) {
        throw new Error(res?.data?.error);
      }
      throw new Error(res.statusText);
    }

    return res;
  });

  return client;
};

export const createInstance = ({ Authorization }: { Authorization?: string }) =>
  injectInterceptors(
    axios.create({
      baseURL: "https://api.stg08.sealdocs.com",
      headers: { Authorization },
    })
  );
