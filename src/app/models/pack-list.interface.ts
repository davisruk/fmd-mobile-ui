export interface PackList {
  packs: Pack[];
}

export interface Pack {
  gtin: string;
  serialNumber: string;
  batch: string;
  expiry: string;
  fmdResult?: FMDResult;
}
export interface FMDResult {
  packState: string;
  nmvsCode: string;
  packReason: string;
}
