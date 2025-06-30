'use client';

import React, { useState } from 'react';
import { PageMaxWidth } from '@/components/page-max-width/index';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { authAtom } from '@/state';
import { useAuthActions } from '@/actions/auth';
import { ICreateEnquiry } from '@/interface/auth.interface';
import { OverlayLoader } from '@/components/overlay-loader';
import toast from 'react-hot-toast';
import { HubSpotForm } from './hub-spot-form';

export const ContactForm: React.FC = () => {
  const auth = useRecoilValue(authAtom);
  const { createEnquiry } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    enquiryType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target?.id as string]: e.target?.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault?.();
    const dto: ICreateEnquiry = {
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      enquiryType: formData.enquiryType,
    };

    setIsLoading(true);
    const response = await createEnquiry(dto);

    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success('Enquiry sent successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        enquiryType: '',
      });
    }
    setIsLoading(false);
  };

  return (
    <PageMaxWidth>
      <section className={styles.cfSection}>
        <div className={styles.cfContainer}>
          <h2 className={classNames(styles.cfheaderTitle, 'font-Trap-700')}>
            Still Have Worries? Send Us a Message
          </h2>
          <p className={styles.cfheaderSubtitle}>
            For general inquiries or comments, please complete this form.
          </p>
          {/* <form className={styles.form} onSubmit={handleSubmit}>
            {!auth && (
              <>
                <div className={styles.grid}>
                  <div>
                    <label htmlFor="firstName" className={styles.label}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name..."
                      className={styles.inputField}
                      required
                      aria-label="First Name"
                      onChange={handleChange}
                      value={formData.firstName}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className={styles.label}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name..."
                      className={styles.inputField}
                      required
                      aria-label="Last Name"
                      onChange={handleChange}
                      value={formData.lastName}
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
                      onChange={handleChange}
                      value={formData.email}
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
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                </div>
              </>
            )}

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
                onChange={(e) => handleChange(e as any)}
                value={formData.message}
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
                    className={classNames(styles.radioInput, 'cursor-pointer')}
                    required
                    aria-label={item}
                    onChange={(e) =>
                      handleChange({ target: { id: 'enquiryType', value: item } } as any)
                    }
                    value={formData.enquiryType}
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
          </form> */}
        </div>

        <HubSpotForm />
      </section>

      <OverlayLoader loading={isLoading} />
    </PageMaxWidth>
  );
};

export default ContactForm;
