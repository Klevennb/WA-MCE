import { Modal, Backdrop, Fade, Box } from '@mui/material';
import Button from '../Button/Button';
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
            <div className="flex gap-4">
              <Button
                onClick={() => handleClose()}
                type="button"
                label="No, don't make public"
              />

              <Button
                onClick={() => handleSave(true)}
                label="Yes, make public"
                type="submit"
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
