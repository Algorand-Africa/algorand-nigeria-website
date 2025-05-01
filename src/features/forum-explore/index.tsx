import { IForumCategory } from '@/interface/forum.interface';
import classNames from 'classnames';
import { CategoryItem } from './category-item';

const mockCategories: IForumCategory[] = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  name: `Category ${index + 1}`,
  description: `Stay ahead of the news cycle and join the discussion on breaking news. Lorem Ipsud whatever the fuck that means.`,
  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  totalPosts: Math.floor(Math.random() * 100),
  createdAt: new Date(),
  textColor: '#000',
  image: '',
}));

export const ForumExplore = () => {
  return (
    <div className="h-full flex flex-col md:justify-center items-center">
      <div
        className={classNames('text-[#000] font-Trap-600 text-[26px]', 'leading-[140%] mb-[13px]')}
      >
        Explore Categories
      </div>

      <div className={classNames('grid grid-cols-1 md:grid-cols-2 gap-[16px]')}>
        {mockCategories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};
