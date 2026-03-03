import type { Metadata } from 'next'
import PolicyLayout, { PolicySection, PolicyList } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | FrontechSecurity',
  description: 'How FrontechSecurity collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="January 1, 2025"
    >
      <PolicySection title="1. Introduction">
        <p>
          FrontechSecurity ("we," "our," or "us") operates the website frontechsecurity.com and provides smart home security camera and doorbell installation services across the USA and Canada. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
        </p>
        <p>
          By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our website or services.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect">
        <p>We may collect the following categories of personal information:</p>
        <p><strong className="text-white">Information You Provide Directly:</strong></p>
        <PolicyList items={[
          'Full name, phone number, and email address',
          'Home or business address for scheduling appointments',
          'Payment information (processed securely through third-party processors — we do not store card data)',
          'Messages and communications sent through contact forms',
          'Appointment preferences and service notes',
        ]} />
        <p className="mt-3"><strong className="text-white">Information Collected Automatically:</strong></p>
        <PolicyList items={[
          'IP address and browser type',
          'Pages visited and time spent on the website',
          'Referring URLs and search terms',
          'Device type and operating system',
          'Cookie data (see Cookie Policy)',
        ]} />
      </PolicySection>

      <PolicySection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <PolicyList items={[
          'Schedule and coordinate installation appointments',
          'Contact you about your service booking and updates',
          'Process payments and send invoices',
          'Provide customer support and respond to inquiries',
          'Send service reminders or follow-up communications',
          'Improve our website and service offerings',
          'Comply with legal obligations',
          'Detect and prevent fraudulent activity',
        ]} />
      </PolicySection>

      <PolicySection title="4. Sharing Your Information">
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
        <PolicyList items={[
          'Our technicians and field staff to fulfill your service appointment',
          'Payment processors (e.g., Stripe) to securely process transactions',
          'Scheduling and CRM software used to manage appointments',
          'Analytics providers (e.g., Google Analytics) to understand site usage',
          'Law enforcement or government authorities when required by law',
        ]} />
      </PolicySection>

      <PolicySection title="5. Data Retention">
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Customer records are typically retained for a period of 5 years after the last service interaction.
        </p>
      </PolicySection>

      <PolicySection title="6. Data Security">
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, access controls, and secure data storage.
        </p>
        <p>
          However, no method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="7. Your Rights">
        <p>Depending on your location (USA/Canada), you may have the right to:</p>
        <PolicyList items={[
          'Access the personal information we hold about you',
          'Request correction of inaccurate data',
          'Request deletion of your personal data',
          'Opt out of marketing communications',
          'Lodge a complaint with a supervisory authority',
        ]} />
        <p className="mt-3">To exercise any of these rights, contact us at support@frontechsecurity.com or call +1 (888) 400-3290.</p>
      </PolicySection>

      <PolicySection title="8. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies independently.
        </p>
      </PolicySection>

      <PolicySection title="9. Children's Privacy">
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
        </p>
      </PolicySection>

      <PolicySection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <PolicyList items={[
          'Phone: +1 (888) 400-3290',
          'Email: support@frontechsecurity.com',
          'Website: frontechsecurity.com',
        ]} />
      </PolicySection>
    </PolicyLayout>
  )
}
