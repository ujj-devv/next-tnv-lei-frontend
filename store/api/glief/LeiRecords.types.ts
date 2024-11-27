export type LeiMain = {
  data: LeiRecord[];
  links: unknown;
  meta: unknown;
};

export type LeiRecord = {
  type: string;
  id: string;
  attributes: LeiAttributes;
  relationships: LeiRelationships;
  links: LeiLinks;
};

export type LeiAttributes = {
  lei: string;
  entity: EntityDetails;
  registration: RegistrationDetails;
  bic: string | null;
  mic: string | null;
  ocid: string | null;
  spglobal: string | null;
  conformityFlag: string | null;
};

export type EntityDetails = {
  legalName: LegalName;
  otherNames: Array<string>;
  transliteratedOtherNames: Array<string>;
  legalAddress: Address;
  headquartersAddress: Address;
  registeredAt: RegisteredAt;
  registeredAs: string;
  jurisdiction: string;
  category: string;
  legalForm: LegalForm;
  associatedEntity: AssociatedEntity;
  status: string;
  expiration: Expiration;
  successorEntity: SuccessorEntity;
  successorEntities: Array<SuccessorEntity>;
  creationDate: string;
  subCategory: string | null;
  otherAddresses: Array<Address>;
  eventGroups: Array<string>;
};

export type LegalName = {
  name: string;
  language: string;
};

export type Address = {
  language: string;
  addressLines: Array<string>;
  addressNumber: string | null;
  addressNumberWithinBuilding: string | null;
  mailRouting: string | null;
  city: string;
  region: string;
  country: string;
  postalCode: string;
};

export type RegisteredAt = {
  id: string;
  other: string | null;
};

export type LegalForm = {
  id: string;
  other: string | null;
};

export type AssociatedEntity = {
  lei: string | null;
  name: string | null;
};

export type SuccessorEntity = {
  lei: string | null;
  name: string | null;
};

export type Expiration = {
  date: string | null;
  reason: string | null;
};

export type RegistrationDetails = {
  initialRegistrationDate: string;
  lastUpdateDate: string;
  status: string;
  nextRenewalDate: string;
  managingLou: string;
  corroborationLevel: string;
  validatedAt: ValidatedAt;
  validatedAs: string;
  otherValidationAuthorities: Array<string>;
};

export type ValidatedAt = {
  id: string;
  other: string | null;
};

export type LeiRelationships = {
  "managing-lou": Link;
  "lei-issuer": Link;
  "field-modifications": Link;
  "direct-parent"?: ExceptionLink; // Optional because it's not present in all objects
  "ultimate-parent"?: ExceptionLink;
};

export type Link = {
  links: {
    related: string;
  };
};

export type ExceptionLink = {
  links: {
    "reporting-exception": string;
  };
};

export type LeiLinks = {
  self: string;
};

export type LeiRecordParamsType = {
  searchTerm: string;
  countryCode?: string;
};
