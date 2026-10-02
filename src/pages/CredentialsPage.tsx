import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Credentials } from '../sections/Credentials';
import { CTABanner } from '../sections/CTABanner';

export const CredentialsPage: React.FC = () => (
  <div className="pt-20 sm:pt-24 overflow-hidden">
    <PageHeader
      crumb="Credentials"
      eyebrow="COMPLIANCE LIBRARY"
      title="Government Registrations & Statutory Approvals"
      intro="Special Class Contractor registrations with the Governments of Andhra Pradesh and Karnataka, dual-state GST, MSME Udyam registration, and an audited financial baseline certified by Chartered Accountants."
    />
    <Credentials />
    <CTABanner />
  </div>
);
