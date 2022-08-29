export interface IResponse{
  data?: any;
  loading?: boolean;
  networkStatus?: number;
}
export interface IMutationResponse{
  isSuccess: boolean;
  message?: string;
}
