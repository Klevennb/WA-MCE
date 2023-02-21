import { Modal, Backdrop, Fade, Box, Button } from '@mui/material';
import { style } from './styles';

type Props = {
  handleSave: (val: boolean) => void;
  handleClose: () => void;
  open: boolean;
};

export const SaveModal = (props: Props) => {
  const { handleSave, handleClose, open } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <Button onClick={() => handleSave(false)}>
                No, don&apost make public
              </Button>
              <Button onClick={() => handleSave(true)}>Yes, make public</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
