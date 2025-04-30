import { BsCalendarDate } from 'react-icons/bs';
import { CiGlobe } from 'react-icons/ci';

interface Props {
  name: string;
  description: string;
  createdAt: Date;
  totalPosts: number;
}

export const CategoryInfoCard = ({ name, description, createdAt, totalPosts }: Props) => {
  return (
    <div className="w-full p-6 bg-[#FAFAFC] rounded-[12px] h-fit">
      <h4 className="text-[32px] text-[#000] font-Trap-700 leading-[110%] tracking-[-0.01em] mb-1">
        {name}
      </h4>
      <p className="text-[14px] text-[#000] font-Trap-400 leading-[140%] tracking-[0.01em] mb-3">
        {description}
      </p>
      <div className="flex gap-[14px] items-center mb-3">
        <BsCalendarDate color="#6D6D6D" />
        <p className="text-[#6D6D6D] text-[12px] font-Trap-400 leading-[140%] tracking-[0.01em]">
          Created{' '}
          {createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <div className="flex gap-[14px] items-center mb-3">
        <CiGlobe color="#6D6D6D" />
        <p className="text-[#6D6D6D] text-[12px] font-Trap-400 leading-[140%] tracking-[0.01em] m-0">
          Public
        </p>
      </div>

      <h4 className="text-[18px] text-[#6D6D6D] font-Trap-700 leading-[140%] tracking-[0.01em]">
        {totalPosts}
      </h4>
      <p className="text-[#6D6D6D] text-[10px] font-Trap-400 leading-[140%] tracking-[0.01em]">
        Total Post
      </p>
    </div>
  );
};
