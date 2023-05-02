import { Typography, IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

type Props = {
  bio: string;
  isUser: boolean;
};

export const UserBio = (props: Props) => {
  const { bio, isUser } = props;

  const editBio = () => {};
  return (
    <div>
      <div className="text-gray-600 flex gap-8">
        <Typography variant="h6">Bio</Typography>
        {isUser && (
          <IconButton onClick={editBio} size="small">
            <ModeEditIcon />
          </IconButton>
        )}
      </div>

      <div>
        {bio
          ? bio
          : isUser
          ? 'Tell us about yourself'
          : 'They have not written a bio yet'}{' '}
      </div>
    </div>
  );
};
