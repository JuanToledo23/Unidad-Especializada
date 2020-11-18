export interface HeaderClarification {
  clarificationId: number;
  alnovaId: string;
  opinion: string;
  resolutionDate: string;
  priority: string;
  status: string;
}

export interface ClientInformation {
  name: string;
  accountNumber: string;
  cardNumber: string;
  street: string;
  streetNumber: string;
  suburb: string;
  state: string;
  municipality: string;
  postalCode: string;
  extNumber: string;
  uniqueClient: string;
  mobile: string;
  email: string;
}

export interface CaptureChannel {
  channel: string;
  official: string;
  branchNumber: string;
  branchName: string;
}

export interface ClarificationData {
  preFolio: string;
  folio: string;
  product: string;
  subProduct: string;
  clasification: string;
  caseName: string;
  reclaimedAmount: string;
  beginDate: string;
  resolutionTime: string;
  resolutionDate: string;
}

export interface AffectedOrders {
  subFolio: string;
  affectedOrder: string;
  date: string;
  amount: string;
  originChannel: string;
  originBranch: string;
  channel: string;
  opinion: string;
  caseName: string;
  chipCard: string;
  input: string;
  reclaimedAmount: string;
}

export interface Binnacle {
  role: string;
  name: string;
  operationDate: string;
  action: string;
  comments: string;
}

export interface ClarificationInfo {
  header: HeaderClarification;
  clientInformation: ClientInformation;
  captureChannel: CaptureChannel;
  clarificationData: ClarificationData;
  affectedOrders: AffectedOrders[];
  binnacle: Binnacle[];
  description: string;
}

export interface ResponseClarificationsGeneral {
  codigo: number;
  descripcion: string;
  success: boolean;
  respuesta: ClarificationsResponse;
}

export interface ClarificationsResponse {
  responseInfo: ClarificationInfo;
  catalogues: any;
  response: CoreResponse;
  tokenInformation: TokenInformation;
}

export interface CoreResponse {
  message: string;
  code: string;
  type: boolean;
  serverDate: string;
}

export interface TokenInformation {
  token: string;
  expirationDate: string;
}

