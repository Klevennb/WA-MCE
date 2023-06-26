import { Modal, Backdrop, Fade, Box, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import { style } from './styles';

type Props = {
  handleSave: (val: number | string) => void;
  handleClose: () => void;
  open: boolean;
  label: string;
  title: string;
  type?: 'number' | 'text';
};

export const InputModal = (props: Props) => {
  const {
    handleSave,
    handleClose,
    open,
    label,
    title,
    type = 'number',
  } = props;
  const [inputValue, setInputValue] = useState<number | string>(
    type === 'text' ? '' : 0,
  );

  const handleEdit = (
    val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (type === 'text') {
      setInputValue(val.target.value);
    } else {
      setInputValue(parseInt(val.target.value, 10));
    }
  };

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
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-bold mb-4 -mt-2">{title}</h2>
              <TextField
                id={`${label}-input`}
                label={label}
                variant="outlined"
                type={type}
                onChange={handleEdit}
                value={inputValue}
                multiline={type === 'text' ? true : false}
                rows={type === 'text' ? 4 : 1}
                className="flex-grow"
              />
              <div className="flex justify-center gap-4 mt-4">
                <Button
                  onClick={() => handleClose()}
                  label="Cancel"
                  variant="outlined"
                />
                <Button onClick={() => handleSave(inputValue)} label="OK" />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
