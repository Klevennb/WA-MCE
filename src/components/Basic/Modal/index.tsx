import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { style } from './styles';

type Props = {
  handleOpen: () => void;
  open: boolean;
  handleConfirmation: () => void;
};

export const TransitionsModal = (props: Props) => {
  const { handleOpen, open, handleConfirmation } = props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            This will be permanent, but it won&#39;t effect your streak.
          </Typography>
          <Box className="flex justify-end">
            <Button onClick={handleOpen} className="m-2">
              Cancel
            </Button>
            <Button onClick={handleConfirmation} className="m-2">
              I&#39;m sure
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
