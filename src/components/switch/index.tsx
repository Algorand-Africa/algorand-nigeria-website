import classNames from 'classnames';

interface Props {
  selected: boolean;
  onClick: (shouldOpen: boolean) => void;
}

export const Switch = ({ selected, onClick }: Props) => {
  return (
    <div className={classNames('')}>
      <input type="checkbox" />
    </div>
  );
};
