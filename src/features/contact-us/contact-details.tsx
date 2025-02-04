import React from 'react';

export const ContactDetails = () => {
  return (
    <section className="relative bg-gray-100 rounded-[32px] mx-auto max-w-6xl mt-14 px-6 py-16">
      {/* Main Frame */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px] space-y-6 pl-6 lg:pl-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-Trap text-[60px] lg:text-[48px] font-bold leading-[66px] tracking-[-0.01em]">
              Get in Touch
              <br />
              with Us
            </h1>

            <p className="font-Inter text-[28px] font-normal text-[#6D6D6D] leading-[33.6px] tracking-[-0.01em]">
              Have questions, feedback, or partnership ideas? We're here to listen and help.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-100 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738597436/Email_Frame_d44255.png"
                  alt="Email Icon"
                  className="w-8 h-8"
                />
              </div>
              <a
                href="mailto:support@algorand-nigeria.com"
                className="font-Inter text-[28px] font-normal leading-[33.6px] tracking-[-0.01em] text-[#2D2DF1] underline whitespace-nowrap"
              >
                <span className="font-bold">Email:</span>
                <span className="font-normal"> support@algorandnigeria.com</span>
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-100 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738597416/Tel_Frame_bu31py.png"
                  alt="Phone Icon"
                  className="w-8 h-8"
                />
              </div>
              <a
                href="tel:+2348012456789"
                className="font-Inter text-[28px] font-normal leading-[33.6px] tracking-[-0.01em] text-[#2D2DF1] underline whitespace-nowrap"
              >
                <span className="font-bold">Tel:</span>
                <span className="font-normal"> +234 801 245 6789</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 min-w-[300px] flex justify-center">
          <img
            src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1738407979/jelly-message-sent-the-monster-08c3f0ad_1_lad08j.png"
            alt="Contact Illustration"
            className="w-full max-w-[400px] lg:max-w-[500px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
