import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Still Have Worries? Send Us a Message
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          For general inquiries or comments, please complete this form.
        </p>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-800">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your first name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                aria-label="First Name"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-800">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                aria-label="Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                aria-label="Email Address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                aria-label="Phone Number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="What do you want to talk about?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              aria-label="Message"
            ></textarea>
          </div>

          <fieldset className="space-y-4">
            <legend className="text-lg font-medium text-gray-800">
              What's your question or comment about?
            </legend>
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
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="inquiry"
                  className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                  aria-label={item}
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </fieldset>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500"
              required
              aria-label="Consent Checkbox"
            />
            <label className="text-sm text-gray-700">
              I consent to the Algorand Foundation collecting my information for marketing. I can
              withdraw my consent anytime via the unsubscribe link or by contacting{' '}
              <a href="mailto:legal@algorand.foundation" className="text-blue-600 underline">
                legal@algorand.foundation
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-3/4 mx-auto flex justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
