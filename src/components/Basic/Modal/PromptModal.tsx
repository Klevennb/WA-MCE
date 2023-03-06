import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import { useState } from 'react';
import { style } from './styles';

interface Props {
  onUse: (category: string) => void;
  handleOpen: () => void;
  open: boolean;
}

export const PromptModal = (props: Props) => {
  const { onUse, open, handleOpen } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  const handleUse = () => {
    if (selectedCategory) {
      onUse(selectedCategory);
    }
  };

  return (
    <div>
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
            <div>
              <Button onClick={() => handleCategorySelection('Journal')}>
                Journal
              </Button>
              <Button
                onClick={() => handleCategorySelection('Science Fiction')}
              >
                Science Fiction
              </Button>
              <Button onClick={() => handleCategorySelection('Fantasy')}>
                Fantasy
              </Button>
              <Button onClick={() => handleCategorySelection('Romance')}>
                Romance
              </Button>
            </div>
            <div>
              <Button onClick={handleOpen}>Cancel</Button>
              <Button onClick={handleUse}>Use</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
