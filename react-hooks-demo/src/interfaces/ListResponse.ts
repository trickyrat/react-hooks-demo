import IResponseBase from './ResponseBase';

export default interface IListResponse<T> extends IResponseBase {
  data: Array<T>,
}