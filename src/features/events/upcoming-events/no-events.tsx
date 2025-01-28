import classNames from 'classnames';

export const NoEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[350px] md:h-[800px]">
      <img
        src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737985463/Group_3_rzohvk.png"
        alt="No Events"
        className="object-contain w-[79.68px] h-[76.1px] md:h-[127.33px] w-[133.33px] mb-[20.95px] md:mb-[45.84px]"
      />
      <h4
        className={classNames(
          'text-[#000000] font-Inter font-bold tracking-[-0.01em] mb-[1.8px]',
          'text-[24px] leading-[28.8px] md:text-[28px] leading-[33.6px]',
        )}
      >
        No event found
      </h4>
      <p
        className={classNames(
          'text-[#475367] font-Inter font-normal tracking-[0.01em]',
          'text-[14px] leading-[19.6px] md:text-[18px] leading-[25.2px]',
        )}
      >
        There isn't any event that matches your criteria
      </p>
    </div>
  );
};
