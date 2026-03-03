import type { Metadata } from 'next'
import PolicyLayout, { PolicySection, PolicyList } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy | FrontechSecurity',
  description: 'How FrontechSecurity uses cookies and tracking technologies on its website.',
}

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar tracking technologies"
      lastUpdated="January 1, 2025"
    >
      <PolicySection title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work, or work more efficiently, and to provide reporting information to website owners.
        </p>
        <p>
          Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device for a set period or until you delete them).
        </p>
      </PolicySection>

      <PolicySection title="2. How We Use Cookies">
        <p>FrontechSecurity uses cookies on frontechsecurity.com for the following purposes:</p>
        <PolicyList items={[
          'Essential cookies: Required for the website to function properly (e.g., booking form sessions, navigation)',
          'Analytics cookies: To understand how visitors interact with our site (e.g., pages visited, time on site)',
          'Performance cookies: To help us improve loading speed and overall user experience',
          'Marketing cookies: To measure the effectiveness of our advertising campaigns (e.g., Google Ads conversion tracking)',
          'Preference cookies: To remember your settings and preferences on return visits',
        ]} />
      </PolicySection>

      <PolicySection title="3. Third-Party Cookies">
        <p>We may use cookies from trusted third-party services, including:</p>
        <PolicyList items={[
          'Google Analytics — website traffic and behavior analysis',
          'Google Ads (Google Tag Manager) — conversion tracking and remarketing',
          'Facebook Pixel — advertising measurement and audience building',
          'Hotjar or similar — heatmaps and visitor behavior analytics (where applicable)',
        ]} />
        <p className="mt-3">
          These third parties have their own cookie and privacy policies. We encourage you to review them. FrontechSecurity does not control the use of these third-party cookies.
        </p>
      </PolicySection>

      <PolicySection title="4. Cookie Duration">
        <p>The cookies we use fall into the following duration categories:</p>
        <PolicyList items={[
          'Session cookies: Deleted when you close your browser',
          'Short-term persistent cookies: Stored for up to 30 days',
          'Long-term persistent cookies: Stored for up to 24 months (primarily analytics and ad tracking)',
        ]} />
      </PolicySection>

      <PolicySection title="5. Managing and Disabling Cookies">
        <p>
          You can control or delete cookies at any time through your browser settings. Most browsers allow you to:
        </p>
        <PolicyList items={[
          'View cookies stored on your device',
          'Allow or block cookies from all or specific websites',
          'Delete stored cookies',
        ]} />
        <p className="mt-3">
          Please note that disabling certain cookies may affect the functionality of our website and your ability to use some features, such as the booking form.
        </p>
        <p>
          To opt out of Google Analytics tracking, visit:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#1d6ef5] hover:underline" target="_blank" rel="noopener noreferrer">
            tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </PolicySection>

      <PolicySection title="6. Do Not Track">
        <p>
          Some browsers include a "Do Not Track" (DNT) feature that sends a signal to websites requesting that your browsing not be tracked. Our website does not currently respond to DNT signals, but you may use the opt-out tools above to limit tracking.
        </p>
      </PolicySection>

      <PolicySection title="7. Consent">
        <p>
          By continuing to use frontechsecurity.com, you consent to our use of cookies as described in this policy. Where required by law, we will request explicit consent before placing non-essential cookies on your device.
        </p>
      </PolicySection>

      <PolicySection title="8. Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology or applicable law. Changes will be posted on this page with an updated revision date.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact Us">
        <p>For questions or concerns about our use of cookies, please contact us:</p>
        <PolicyList items={[
          'Phone: +1 (888) 400-3290',
          'Email: support@frontechsecurity.com',
          'Website: frontechsecurity.com',
        ]} />
      </PolicySection>
    </PolicyLayout>
  )
}
