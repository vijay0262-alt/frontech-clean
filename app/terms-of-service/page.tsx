import type { Metadata } from 'next'
import PolicyLayout, { PolicySection, PolicyList } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Terms of Service | FrontechSecurity',
  description: 'Terms and conditions governing the use of FrontechSecurity services.',
}

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services"
      lastUpdated="January 1, 2025"
    >
      <PolicySection title="1. Acceptance of Terms">
        <p>
          By booking an installation appointment, contacting us for services, or using our website frontechsecurity.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
        </p>
      </PolicySection>

      <PolicySection title="2. Services Provided">
        <p>FrontechSecurity provides professional installation, setup, configuration, and ongoing service plans for smart home security cameras, video doorbells, and related smart home devices. Our services include:</p>
        <PolicyList items={[
          'Security camera installation (indoor and outdoor)',
          'Smart video doorbell installation and configuration',
          'Wi-Fi network setup and optimization for security devices',
          'App configuration and user training',
          'Remote and on-site service & assistance',
          'System upgrades and maintenance',
        ]} />
      </PolicySection>

      <PolicySection title="3. Appointments and Scheduling">
        <p>By scheduling an appointment, you agree to:</p>
        <PolicyList items={[
          'Be present at the service address or have an authorized adult (18+) present',
          'Provide reasonable access to all areas where devices will be installed',
          'Ensure your hardware/devices are available and unboxed prior to technician arrival',
          'Notify us at least 24 hours in advance of any need to reschedule or cancel',
          'Provide accurate address and contact information',
        ]} />
        <p className="mt-3">We reserve the right to refuse service or reschedule if access is denied or conditions are unsafe.</p>
      </PolicySection>

      <PolicySection title="4. Payment Terms">
        <PolicyList items={[
          'Payment is due upon completion of the service, unless otherwise agreed',
          'We accept all major credit cards, debit cards, and electronic payments',
          'Subscription plans (monthly or annual) are billed in advance on a recurring basis',
          'All prices are in USD unless otherwise stated',
          'Taxes may apply based on your jurisdiction',
        ]} />
      </PolicySection>

      <PolicySection title="5. Cancellation and Rescheduling">
        <p>
          Appointments may be cancelled or rescheduled without penalty provided notice is given at least 24 hours in advance. Cancellations within 24 hours may be subject to a $25 late cancellation fee. No-shows may be charged the full service fee.
        </p>
        <p>For subscription plans, you may cancel at any time. Cancellation takes effect at the end of the current billing period. No prorated refunds are issued for partial periods.</p>
      </PolicySection>

      <PolicySection title="6. Hardware and Equipment">
        <p>
          Customers are responsible for providing all hardware (cameras, doorbells, routers, mounting hardware, etc.) unless otherwise agreed. FrontechSecurity is not responsible for:
        </p>
        <PolicyList items={[
          'Defective, incompatible, or damaged hardware provided by the customer',
          'Warranty claims on customer-provided equipment',
          'Losses resulting from the failure of third-party device manufacturers',
          'Devices that become discontinued or unsupported by manufacturers',
        ]} />
      </PolicySection>

      <PolicySection title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, FrontechSecurity shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
        </p>
        <PolicyList items={[
          'Loss of data or recordings from security devices',
          'Security breaches resulting from device or network vulnerabilities',
          'Property damage caused by pre-existing conditions not disclosed prior to installation',
          'Inability to access devices due to third-party software or service failures',
        ]} />
        <p className="mt-3">Our total liability for any claim related to our services shall not exceed the amount paid for the specific service giving rise to the claim.</p>
      </PolicySection>

      <PolicySection title="8. Intellectual Property">
        <p>
          All content on frontechsecurity.com, including text, logos, images, and graphics, is the property of FrontechSecurity and protected by applicable intellectual property laws. Unauthorized use is prohibited.
        </p>
      </PolicySection>

      <PolicySection title="9. Governing Law">
        <p>
          These Terms of Service are governed by the laws of the State of New York, USA, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved exclusively in the courts of New York.
        </p>
      </PolicySection>

      <PolicySection title="10. Changes to Terms">
        <p>
          We may modify these Terms of Service at any time. Updated terms will be posted on this page. Continued use of our services after changes constitutes acceptance of the revised terms.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact">
        <p>For questions regarding these Terms, contact us at:</p>
        <PolicyList items={[
          'Phone: +1 (888) 400-3290',
          'Email: support@frontechsecurity.com',
        ]} />
      </PolicySection>
    </PolicyLayout>
  )
}
