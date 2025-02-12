import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { NewsLetter } from '../newsletter';

interface Props {
  children?: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-full bg-white relative">
      <img
        src="https://res.cloudinary.com/dy7olyvi0/image/upload/v1737488313/Vector_1_ihhgql.png"
        alt="Bg"
        className="absolute top-0 min-w-[874px] left-[0] md:w-[95%] md:left-[2.5%] max-h-full"
      />

      <Navbar />
      <div className="flex-1 w-full relative">{children}</div>
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
};
