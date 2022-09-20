import AppRequest from "./index";

export function register(
  accounNumber: string,
  password: string,
  name: string
): any {
  return AppRequest.post({
    url: "/register",
    data: {
      accounNumber,
      password,
      name,
    },
  });
}

export function login(accounNumber: string, password: string): any {
  return AppRequest.post({
    url: "/login",
    data: {
      accounNumber,
      password,
    },
  });
}
