import { Entry } from 'types/types';
import { countStreak } from 'utils/streak';

type Props = {
  entries: Entry[];
};

export const Streak = (props: Props) => {
  const { entries } = props;
  const streak =
    entries?.length > 0
      ? countStreak(entries, new Date().getDate().toString())
      : 0;

  return (
    <div>
      {streak
        ? `You have written for ${streak} day${streak > 1 ? 's' : ''}`
        : 'No Streak For You!'}
    </div>
  );
};
