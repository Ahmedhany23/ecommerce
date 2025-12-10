import Image from "next/image";

const ContactUs = () => {
  return (
    <article className="font-poppins h-full w-full rounded bg-white p-8 shadow-xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image width={32} height={32} src="/icons/phone.png" alt="phone" />
          <p className="text-base font-medium text-black">Call to Us</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-normal">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm font-normal">Phone: +8801611112222</p>
        </div>
      </div>
      <div className="my-8 border-b border-b-black"></div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image width={32} height={32} src="/icons/mail.png" alt="mail" />
          <p className="text-base font-medium text-black">Write To US</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-normal">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm font-normal">Email: customer@exclusive.com</p>
          <p className="text-sm font-normal">Email: support@exclusive.com</p>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
