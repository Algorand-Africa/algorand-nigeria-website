import classNames from 'classnames';
import styles from './index.module.scss';
import Link from 'next/link';

export const BlogCard = () => {
  const img =
    'https://res.cloudinary.com/dy7olyvi0/image/upload/v1737629700/f125eff9506ca7fcdbaa86f83965f794_rizawi.jpg';

  return (
    <Link href="#" className={classNames(styles.blog_card)}>
      <div className={classNames('flex flex-col')}>
        <h4 className={classNames('font-Inter font-[700] text-[28px] leading-[33.6px] text-white')}>
          Taraba Algorand Hackathon Winners.
        </h4>
        <p
          className={classNames(
            'text-[#E5E7E9] font-Inter font-[400] text-[20px] leading-[24px] pt-2',
          )}
        >
          Algorand in association with the state of Taraba Government together hosted in 2024 and
          this are the list of the winners and the their prizes
        </p>
        <div className={classNames('flex flex-row items-center justify-between pt-4')}>
          <p className={classNames('font-Inter text-[#E5E7E9] font-[400] text-base')}>
            By Micah Tom
          </p>
          <p className={classNames('font-Inter text-[#E5E7E9] font-[400] text-base')}>
            Jan 12th 2025
          </p>
        </div>
      </div>
      <img
        className={classNames('rounded-[8px] w-full h-[200px] object-cover md:h-[326px]')}
        src={img}
        alt="Blog image"
      />
    </Link>
  );
};
