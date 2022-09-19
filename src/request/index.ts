import Request from "./request";

const token: string =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE0MjMwNzA3MDkxMDU1MSwiVGVuYW50SWQiOjE0MjMwNzA3MDkxODc4MCwiQWNjb3VudCI6InN1cGVyQWRtaW4iLCJOYW1lIjoi6LaF57qn566h55CG5ZGYIiwiU3VwZXJBZG1pbiI6MSwiVGVuYW50VHlwZSI6MSwiVGVuYW50TmFtZSI6Iuezu-e7n-enn-aItyIsImlhdCI6MTY2MzUwMzg3NywibmJmIjoxNjYzNTAzODc3LCJleHAiOjE2NjM1OTAyNzcsImlzcyI6Im1hZ2ljIiwiYXVkIjoibWFnaWMifQ.pGF0kfHlEEaL7CnX1zhGuOgjk3-pk_S5UpUi6FBNJn0";

interface BookType {
  id: string;
  image: string;
  introduce: string;
  isDeleted: boolean;
  name: string;
  status: number;
  type: string;
}

interface DataType {
  pageNo: number;
  pageSize: number;
  rows: BookType[];
  totalPage: number;
  totalRows: number;
}

Request.setAppInterseptor({
  beforeRequest(config) {
    console.log("我是APP的请求拦截器");
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }
    console.log(config);
    return config;
  },
  requestFail(err) {
    console.log(err);
    return Promise.reject(err);
  },
  afterResponse(res) {
    console.log("我是APP的响应拦截器");
    return res;
  },
  responseFail(err) {
    console.log(err);
    return Promise.reject(err);
  },
});

const home = new Request({
  baseURL: "http://www.jmdch.xyz:8888",
  timeout: 4000,
});

home
  .request<DataType>({
    url: "/api/Novel/GetNovelHeadPage",
    method: "GET",
    interseptor: {
      afterResponse(res) {
        console.log(res);
        return res;
      },
    },
  })
  .then((res) => {
    console.log("------------");
    console.log(res);
  });

export default home;
