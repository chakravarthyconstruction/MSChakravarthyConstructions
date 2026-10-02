import { siteData } from './site';

export type CredentialGroup = 'Statutory' | 'Contractor Registration' | 'Financial';

export interface Credential {
  id: string;
  group: CredentialGroup;
  title: string;
  issuer: string;
  reference: string;
  detail?: string;
}

const { corporate } = siteData;

/**
 * Public-safe credential register.
 *
 * Privacy rules: personal Aadhaar numbers of partners, bank account numbers,
 * IFSC codes and cancelled cheque images must never be added here or to any
 * bundled asset. Only firm-level statutory identifiers are published.
 */
export const credentials: Credential[] = [
  {
    id: 'firm-registration',
    group: 'Statutory',
    title: 'Partnership Firm Registration',
    issuer: corporate.registrar,
    reference: corporate.firmRegistration,
    detail: `Registered under ${corporate.registrationAct} on ${corporate.registrationDate}`,
  },
  {
    id: 'pan',
    group: 'Statutory',
    title: 'Permanent Account Number (Firm)',
    issuer: 'Income Tax Department, Government of India',
    reference: corporate.pan,
  },
  ...corporate.gst.map((g) => ({
    id: `gst-${g.gstin}`,
    group: 'Statutory' as const,
    title: `GST Registration — ${g.state}`,
    issuer: 'Goods and Services Tax Network',
    reference: g.gstin,
    detail: `Principal place of business: ${g.principalPlace}`,
  })),
  {
    id: 'udyam',
    group: 'Statutory',
    title: `MSME Udyam Registration — ${corporate.msme.category}`,
    issuer: 'Ministry of MSME, Government of India',
    reference: corporate.msme.udyam,
    detail: `NIC ${corporate.msme.nicCode}: ${corporate.msme.nicDescription}`,
  },
  ...corporate.contractorRegistrations.map((r) => ({
    id: `contractor-${r.number}`,
    group: 'Contractor Registration' as const,
    title: r.classification,
    issuer: `${r.department}, ${r.authority}`,
    reference: r.number,
    detail: r.note,
  })),
  ...corporate.financials.map((f) => ({
    id: `fin-${f.udin}`,
    group: 'Financial' as const,
    title: `${f.label}: ${f.value}`,
    issuer: corporate.auditor,
    reference: `UDIN ${f.udin}`,
    detail: f.detail,
  })),
];
