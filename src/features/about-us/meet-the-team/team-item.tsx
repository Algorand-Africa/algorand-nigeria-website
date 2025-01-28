import classNames from 'classnames';
import { FaXTwitter } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';
import { TbBrandLinkedin } from 'react-icons/tb';

interface Props {
  name: string;
  title: string;
  info: string;
  image?: string;
}

export const TeamItem = ({
  name,
  title,
  info,
  image = 'https://res.cloudinary.com/dy7olyvi0/image/upload/v1737661102/istockphoto-1316947194-612x612_nwtxtj.jpg',
}: Props) => {
  return (
    <div
      className={classNames(
        'w-[340px] min-w-[340px] h-[400px] border-[#FFF] border-[2px] rounded-[16px]',
        'bg-no-repeat bg-cover bg-center',
        'flex items-end',
      )}
      style={{
        background: `url('${image}')`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className={classNames(
          'bg-[linear-gradient(to_bottom,_#FFFFFF00,_#FFFFFF73,_#FFFFFF)]  w-full p-[16px]',
          'backdrop-blur-[1px]',
        )}
      >
        <div className="flex justify-between mb-[10px]">
          <div>
            <h4 className="text-[#FFFEF8] text-[24px] font-Inter font-bold leading-[28.8px]">
              {name}
            </h4>
            <p className="text-[#001324] font-Inter font-normal leading-[19.6px] text-[14px]">
              {title}
            </p>
          </div>

          <div className="flex self-end gap-[4px]">
            <div
              className={classNames(
                'h-[32px] w-[32px] border-[1.07px] rounded-[100%]',
                'flex items-center justify-center',
                'bg-[#FF6D60]',
              )}
            >
              <LuInstagram size={18} color="#FFF" />
            </div>
            <div
              className={classNames(
                'h-[32px] w-[32px] border-[1.07px] rounded-[100%]',
                'flex items-center justify-center',
                '',
              )}
            >
              <FaXTwitter size={18} color="#001324" />
            </div>
            <div
              className={classNames(
                'h-[32px] w-[32px] border-[1.07px] rounded-[100%]',
                'flex items-center justify-center',
                '',
              )}
            >
              <TbBrandLinkedin size={18} color="#001324" />
            </div>
          </div>
        </div>
        <div className="text-[14px] text-[#001324] font-Inter font-normal leading-[19.6px]">
          {info}
        </div>
      </div>
    </div>
  );
};
