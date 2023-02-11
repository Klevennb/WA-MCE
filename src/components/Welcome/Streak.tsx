import { Entry } from 'types/types';
import { countStreak } from 'utils/streak';

type Props = {
  entries: Entry[];
};

export const Streak = (props: Props) => {
  const { entries } = props;
  const streak = entries?.length > 0 ? countStreak(entries) : 0;

  return (
    <div>
      {streak ? `You have written for ${streak} days` : 'No Streak For You!'}
    </div>
  );
};
