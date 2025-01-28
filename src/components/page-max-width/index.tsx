import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  maxWidth?: number;
  className?: string;
}

export const PageMaxWidth = ({ children, maxWidth, className }: Props) => {
  return (
    <div className={classNames('flex flex-col items-center py-0 px-6 md:px-[100px]', className)}>
      <div className={'w-full max-w-[1252px]'} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};
