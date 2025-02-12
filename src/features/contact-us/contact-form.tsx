// contact-form.tsx
import React from 'react';
import { PageMaxWidth } from '@/components/page-max-width/index';
import styles from './index.module.scss';

export const ContactForm: React.FC = () => {
  return (
    <PageMaxWidth>
      <section className={styles.cfSection}>
        <div className={styles.cfContainer}>
          <h2 className={styles.cfheaderTitle}>Still Have Worries? Send Us a Message</h2>
          <p className={styles.cfheaderSubtitle}>
            For general inquiries or comments, please complete this form.
          </p>
          <form className={styles.form}>
            <div className={styles.grid}>
              <div>
                <label htmlFor="first-name" className={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name..."
                  className={styles.inputField}
                  required
                  aria-label="First Name"
                />
              </div>

              <div>
                <label htmlFor="last-name" className={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name..."
                  className={styles.inputField}
                  required
                  aria-label="Last Name"
                />
              </div>
            </div>

            <div className={styles.grid}>
              <div>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address..."
                  className={styles.inputField}
                  required
                  aria-label="Email Address"
                />
              </div>

              <div>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className={styles.inputField}
                  required
                  aria-label="Phone Number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What do you want to talk about?"
                className={styles.textareaField}
                required
                aria-label="Message"
              />
            </div>

            <fieldset className={styles.questionContainer}>
              <legend className={styles.label}>What's your question or comment about?</legend>
              {[
                'Technology - developer-related queries, protocol, products, etc.',
                'Brand/marketing',
                'Partnerships: Ecosystem/Infrastructure',
                'Startup programs - incubators, accelerators, etc.',
                'Developer Programs - hackathons, bootcamps, etc.',
                'Blockchain clubs/student initiatives',
                'Community',
                'Events',
                'Website Issues',
              ].map((item, index) => (
                <label key={index} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="inquiry"
                    className={styles.radioInput}
                    required
                    aria-label={item}
                  />
                  <span className={styles.radioText}>{item}</span>
                </label>
              ))}
            </fieldset>

            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                className={styles.checkbox}
                required
                aria-label="Consent Checkbox"
              />
              <label className={styles.consentLabel}>
                I consent to the Algorand Foundation collecting my information for marketing. I can
                withdraw my consent anytime via the unsubscribe link or by contacting{' '}
                <a href="mailto:legal@algorand.foundation" className={styles.link}>
                  legal@algorand.foundation
                </a>
                .
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </PageMaxWidth>
  );
};

export default ContactForm;
