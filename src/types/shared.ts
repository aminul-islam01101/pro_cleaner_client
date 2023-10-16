export type TMeta = {
  limit: number;
  page: number;
  size: number;
};
export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
  status: number;
  statusText: string;
  success: boolean;
  headers: any;
  config: any;
};
export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TGenericErrorResponse = {
  statusCode: number;
  errorName: string;
  errorMessages: TGenericErrorMessage[];
};
