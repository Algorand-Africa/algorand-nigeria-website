import classNames from 'classnames';
import { PageMaxWidth } from '../page-max-width';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <PageMaxWidth className="px-0">
      <main className={classNames('md:px-5 md:py-5 flex flex-row')}>
        <div className={classNames('flex-1')}>Auth Layout</div>
        <div className={classNames('flex-1')}>{children}</div>
      </main>
    </PageMaxWidth>
  );
};
