import AppRequest from "./index";

interface Data {
  state: boolean;
}

export function register(
  accounNumber: string,
  password: string,
  name: string
): Promise<Data> {
  return AppRequest.post<Data>({
    url: "/register",
    data: {
      accounNumber,
      password,
      name,
    },
  });
}

export function login(accounNumber: string, password: string): any {
  return AppRequest.post<Data>({
    url: "/login",
    data: {
      accounNumber,
      password,
    },
  });
}
