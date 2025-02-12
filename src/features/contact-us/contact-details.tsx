// contact-details.tsx
import React from 'react';
import { PageMaxWidth } from '@/components/page-max-width/index';
import styles from './index.module.scss';

interface ContactItemProps {
  iconSrc: string;
  altText: string;
  href: string;
  text: string;
  label: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ iconSrc, altText, href, text, label }) => (
  <div className={styles.contactItem}>
    <div className={styles.iconContainer}>
      <img src={iconSrc} alt={altText} className={styles.icon} />
    </div>
    <a href={href} className={styles.contactLink}>
      {label} <span className={styles.contactLinkText}>{text}</span>
    </a>
  </div>
);

export const ContactDetails: React.FC = () => {
  return (
    <PageMaxWidth>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Left Section */}
          <div className={styles.textContainer}>
            <h1 className={styles.headerTitle}>Get in Touch with Us</h1>
            <p className={styles.headerSubtitle}>
              Have questions, feedback, or partnership ideas? We're here to listen and help.
            </p>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <ContactItem
                iconSrc="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738844443/mail-01_acipy5.svg"
                altText="Email Icon"
                href="mailto:support@algorandnigeria.com"
                text="support@algorandnigeria.com"
                label="Email:"
              />
              <ContactItem
                iconSrc="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738844443/call_ume09q.svg"
                altText="Phone Icon"
                href="tel:+2348012456789"
                text="+234 801 245 6789"
                label="Tel:"
              />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738407979/jelly-message-sent-the-monster-08c3f0ad_1_lad08j.png"
              alt="Contact Illustration"
              className={styles.illustration}
            />
          </div>
        </div>
      </section>
    </PageMaxWidth>
  );
};

export default ContactDetails;
