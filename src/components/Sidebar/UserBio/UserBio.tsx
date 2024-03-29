import { Typography, IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from 'react-redux';
import { User } from 'types/redux';
import { InputModal } from 'components/Basic/Modal/InputModal';
import { useState } from 'react';
import { Entry } from 'types/types';

export const UserBio = ({
  user,
  entries = [],
}: {
  user: User;
  entries: Entry[];
}) => {
  const { bio, wordGoal } = user;
  const [wordGoalModalOpen, setWordGoalModalOpen] = useState(false);
  const [bioModalOpen, setBioModalOpen] = useState(false);

  const dispatch = useDispatch();
  const editBio = (val: string | number) => {
    dispatch({ type: 'EDIT_BIO', payload: { data: val }, id: user.id });
    setBioModalOpen(false);
  };
  const editGoal = (val: string | number) => {
    dispatch({ type: 'EDIT_GOAL', payload: { data: val }, id: user.id });
    setWordGoalModalOpen(false);
  };

  const isUser = true;
  return (
    <div>
      <div className="text-gray-600 flex gap-8">
        <Typography variant="h6">Bio</Typography>
        {isUser && (
          <IconButton onClick={() => setBioModalOpen(true)} size="small">
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
      <div className="flex gap-8 mt-2">
        <div className="text-gray-600 flex  items-center whitespace-pre">
          {' '}
          <Typography variant="h6">Word Goal: </Typography>
          {wordGoal ? wordGoal : 'Set a goal!'}
        </div>

        {isUser && (
          <IconButton onClick={() => setWordGoalModalOpen(true)} size="small">
            <ModeEditIcon />
          </IconButton>
        )}
      </div>
      <div className="flex gap-8 mt-2">
        <div className="text-gray-600 flex  items-center whitespace-pre">
          {' '}
          <Typography variant="h6">Stories written: </Typography>
          {entries?.length ?? 'None'}
        </div>
      </div>
      <InputModal
        label="Edit Word Goal"
        open={wordGoalModalOpen}
        handleClose={() => setWordGoalModalOpen(false)}
        handleSave={editGoal}
        type="number"
        title="Make a new goal"
      />
      <InputModal
        label="Edit Bio"
        open={bioModalOpen}
        handleClose={() => setBioModalOpen(false)}
        handleSave={editBio}
        type="text"
        title="Tell us about yourself"
      />
    </div>
  );
};
