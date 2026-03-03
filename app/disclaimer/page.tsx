import type { Metadata } from 'next'
import PolicyLayout, { PolicySection, PolicyList } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Disclaimer | FrontechSecurity',
  description: 'Important disclaimers regarding FrontechSecurity services, website content, and liability.',
}

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Disclaimer"
      subtitle="Important notices regarding our services and website content"
      lastUpdated="January 1, 2025"
    >
      <PolicySection title="1. General Disclaimer">
        <p>
          The information provided on frontechsecurity.com is for general informational purposes only. While we strive to keep all content accurate, complete, and current, we make no warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information on this website.
        </p>
        <p>
          Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any services or information available through this site meet your specific requirements.
        </p>
      </PolicySection>

      <PolicySection title="2. Service Disclaimer">
        <p>
          FrontechSecurity provides professional installation, setup, and service plans for smart home security cameras and doorbells. We make the following important disclosures:
        </p>
        <PolicyList items={[
          'We are an independent installation and support service. We are not affiliated with, endorsed by, or an authorized dealer of any device manufacturer (including Ring, Arlo, Nest, Eufy, Reolink, Blink, or others).',
          'Device brand names are used solely to describe compatibility and are the property of their respective owners.',
          'We do not manufacture, sell, or distribute any hardware. All devices must be supplied by the customer.',
          'Installation results may vary depending on home construction, Wi-Fi infrastructure, device condition, and other factors outside our control.',
          'We do not guarantee 24/7 uptime of your security system, as performance depends on internet connectivity and third-party cloud services.',
        ]} />
      </PolicySection>

      <PolicySection title="3. Security Disclaimer">
        <p>
          While we take all reasonable precautions during installation and configuration, no security system — regardless of quality — provides a guarantee against theft, burglary, vandalism, or other crimes. FrontechSecurity:
        </p>
        <PolicyList items={[
          'Does not guarantee that a properly installed system will prevent all security incidents',
          'Is not responsible for security breaches arising from manufacturer vulnerabilities, firmware bugs, or internet connectivity issues',
          'Strongly recommends customers regularly update device firmware and use strong, unique passwords for all accounts',
          'Is not liable for any losses, damages, or harm resulting from a security incident at a property where our services were rendered',
        ]} />
      </PolicySection>

      <PolicySection title="4. Accuracy of Information">
        <p>
          Pricing, service availability, and technical specifications listed on this website are subject to change without notice. While we endeavor to keep information current, we do not guarantee that all information on the website is accurate at any given time. Please contact us directly at +1 (888) 400-3290 for the most current pricing and availability.
        </p>
      </PolicySection>

      <PolicySection title="5. Third-Party Links">
        <p>
          This website may contain links to third-party websites. These links are provided for your convenience only. FrontechSecurity has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
        </p>
      </PolicySection>

      <PolicySection title="6. Professional Advice">
        <p>
          Nothing on this website constitutes legal, electrical, structural, or professional advice. For any structural modifications, electrical work, or building code requirements, please consult a licensed professional in your jurisdiction.
        </p>
      </PolicySection>

      <PolicySection title="7. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, FrontechSecurity shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to the use of our website, our services, or any inability to access our services.
        </p>
      </PolicySection>

      <PolicySection title="8. Contact">
        <p>For questions about this disclaimer, contact us at:</p>
        <PolicyList items={[
          'Phone: +1 (888) 400-3290',
          'Email: support@frontechsecurity.com',
          'Website: frontechsecurity.com',
        ]} />
      </PolicySection>
    </PolicyLayout>
  )
}
