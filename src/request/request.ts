import axios from "axios";
import type { AxiosInstance } from "axios";
import type { Interseptor, RequestConfig } from "./type";

class Request {
  private instance: AxiosInstance;
  private interseptor?: Interseptor;
  private static AppInterseptor?: Interseptor;

  constructor(config: RequestConfig) {
    // 创建实例
    this.instance = axios.create(config);
    this.interseptor = config.interseptor;

    // 应用请求拦截器
    this.instance.interceptors.request.use(
      Request.AppInterseptor?.beforeRequest,
      Request.AppInterseptor?.requestFail
    );
    // 实例请求拦截器
    this.instance.interceptors.request.use(
      this.interseptor?.beforeRequest,
      this.interseptor?.requestFail
    );
    // 应用响应拦截器
    this.instance.interceptors.response.use(
      Request.AppInterseptor?.afterResponse,
      Request.AppInterseptor?.responseFail
    );
    // 实例响应拦截器
    this.instance.interceptors.response.use(
      this.interseptor?.afterResponse,
      this.interseptor?.responseFail
    );
  }

  // 应用拦截器
  static setAppInterseptor(interseptor: Interseptor) {
    this.AppInterseptor = interseptor;
  }

  // 请求方法
  request<T>(config: RequestConfig): Promise<T> {
    // 请求独有拦截器
    if (config.interseptor) {
      this.instance.interceptors.request.use(config.interseptor?.beforeRequest);
      this.instance.interceptors.response.use(
        config.interseptor?.afterResponse
      );
    }

    return this.instance.request(config);
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default Request;
