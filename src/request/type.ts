import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 拦截器
export interface Interseptor {
  beforeRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFail?: (err: any) => any;
  afterResponse?: (res: AxiosResponse) => AxiosResponse;
  responseFail?: (err: any) => any;
}

// 扩展的配置
export interface RequestConfig extends AxiosRequestConfig {
  interseptor?: Interseptor;
}
