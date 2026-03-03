import type { Metadata } from 'next'
import PolicyLayout, { PolicySection, PolicyList } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Refund Policy | FrontechSecurity',
  description: 'FrontechSecurity refund and satisfaction guarantee policy for installation and support services.',
}

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="Our satisfaction guarantee and refund terms"
      lastUpdated="January 1, 2025"
    >
      <PolicySection title="1. Our Satisfaction Guarantee">
        <p>
          FrontechSecurity is committed to providing professional, high-quality installation and support services. We back our work with a 30-day satisfaction guarantee. If you are not satisfied with the quality of our installation or service, we will return to correct the issue at no additional charge.
        </p>
      </PolicySection>

      <PolicySection title="2. One-Time Installation Services">
        <p><strong className="text-white">Before Service:</strong></p>
        <PolicyList items={[
          'Full refund if you cancel at least 24 hours before your scheduled appointment',
          'Cancellations within 24 hours of the appointment may be subject to a $25 late cancellation fee',
          'No-shows (technician arrives and no one is home without prior notice) may be charged the full service fee',
        ]} />

        <p className="mt-4"><strong className="text-white">After Service:</strong></p>
        <PolicyList items={[
          'If the installation does not meet the agreed-upon scope of work, we will return to correct it at no cost within 30 days',
          'Refund requests must be submitted within 30 days of the service date',
          'Refunds are issued to the original payment method within 5–10 business days',
          'Partial refunds may be issued if only a portion of the service was unsatisfactory',
        ]} />
      </PolicySection>

      <PolicySection title="3. Monthly Support Plan ($9.99/mo)">
        <PolicyList items={[
          'You may cancel your monthly support plan at any time with no penalty',
          'Cancellation takes effect at the end of the current billing cycle',
          'No partial or prorated refunds are issued for the current month upon cancellation',
          'If you experience a technical issue that our support team failed to resolve, you may request a refund for that month by contacting us within 7 days',
        ]} />
      </PolicySection>

      <PolicySection title="4. Annual Service Plan ($99.99/yr)">
        <PolicyList items={[
          'Full refund available within 14 days of purchase if no support sessions have been used',
          'Prorated refund for unused full months after 14 days (e.g., if you cancel after 2 months, 10 months of unused plan value may be refunded)',
          'Used services (on-site visits, setup sessions) are deducted at retail rate from any refund amount',
          'Cancellation requests must be submitted via phone or email',
        ]} />
      </PolicySection>

      <PolicySection title="5. Non-Refundable Situations">
        <p>Refunds will not be issued in the following circumstances:</p>
        <PolicyList items={[
          'Customer-supplied hardware that is defective, incompatible, or damaged prior to installation',
          'Customer decisions to remove or relocate devices after installation is complete',
          'Issues caused by the customer\'s own modifications or third-party interference',
          'Issues caused by internet or power outages outside our control',
          'Services completed and accepted by the customer without objection at the time of completion',
          'Subscription plans that have been used for more than 14 days (annual) or any days in the current billing cycle (monthly)',
        ]} />
      </PolicySection>

      <PolicySection title="6. How to Request a Refund">
        <p>To request a refund, please:</p>
        <PolicyList items={[
          'Call us at +1 (888) 400-3290',
          'Email us at support@frontechsecurity.com with your booking reference and reason',
          'Include your name, appointment date, and a description of the issue',
        ]} />
        <p className="mt-3">Our team will review your request and respond within 2 business days. Approved refunds are processed within 5–10 business days to your original payment method.</p>
      </PolicySection>

      <PolicySection title="7. Disputes">
        <p>
          If you are not satisfied with our refund decision, please contact us to speak with a manager. We are committed to finding a fair resolution for every customer. If a resolution cannot be reached, disputes may be escalated in accordance with our Terms of Service.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
