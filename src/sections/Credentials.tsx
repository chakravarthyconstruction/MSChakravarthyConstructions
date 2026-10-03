import React from 'react';
import { motion } from 'motion/react';
import { FileCheck2, Landmark, Lock } from 'lucide-react';
import { credentials } from '../data/credentials';
import type { CredentialGroup } from '../data/credentials';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { PillButton } from '../components/PillButton';

const GROUPS: { group: CredentialGroup; heading: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { group: 'Contractor Registration', heading: 'Government Contractor Registrations', icon: Landmark },
  { group: 'Statutory', heading: 'Statutory Registrations', icon: FileCheck2 },
];

interface CredentialsProps {
  /** Compact teaser for the home page: contractor registrations only. */
  compact?: boolean;
}

export const Credentials: React.FC<CredentialsProps> = ({ compact = false }) => {
  const groups = compact ? GROUPS.slice(0, 1) : GROUPS;

  return (
    <section
      id="credentials"
      aria-label="Credentials and Statutory Approvals"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto overflow-hidden"
    >
      <div className="bg-[#0F172A] text-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-white/15">
          <div>
            <SectionEyebrow label="CREDENTIALS" dark className="mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading max-w-xl leading-tight">
              Registered &amp; Special Class Licensed
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            Departmental registrations and statutory identifiers of the firm. Certificate copies are furnished on request for
            tender and subcontract evaluation.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 space-y-8">
          {groups.map(({ group, heading, icon: Icon }) => (
            <div key={group}>
              <h3 className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.22em] text-red-400 uppercase mb-4">
                <Icon className="w-4 h-4" />
                {heading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {credentials
                  .filter((c) => c.group === group)
                  .map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      className="rounded-[20px] bg-white/[0.04] border border-white/10 p-4 sm:p-5 flex flex-col gap-2"
                    >
                      <div className="text-sm sm:text-base font-bold font-heading text-white leading-snug">{c.title}</div>
                      <div className="text-xs text-neutral-400 leading-snug">{c.issuer}</div>
                      <div className="mt-1 font-mono text-xs sm:text-sm font-semibold text-red-400 break-words">
                        {c.reference}
                      </div>
                      {c.detail && <div className="text-[11px] text-neutral-400 leading-relaxed">{c.detail}</div>}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="flex items-start gap-2 text-[11px] text-neutral-500 leading-relaxed max-w-2xl">
            <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            Partners&apos; personal identity numbers, bank account details and internal commercial schedules are not published.
          </p>
          {compact && (
            <PillButton to="/credentials" variant="secondary" ariaLabel="View all credentials">
              All Credentials
            </PillButton>
          )}
        </div>
      </div>
    </section>
  );
};
