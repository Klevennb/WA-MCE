import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import { useState } from 'react';
import { Prompts, PromptsEnum } from 'types/prompts';
import { style } from './styles';
import { getPrompts } from './modalUtils';

interface Props {
  onUse: (category: string) => void;
  handleOpen: () => void;
  open: boolean;
}

export const PromptModal = (props: Props) => {
  const { onUse, open, handleOpen } = props;
  const [selectedCategory, setSelectedCategory] = useState<Prompts[] | null>(
    null,
  );
  const [selectedPrompt, setSelectedPrompt] = useState<Prompts | null>(null);

  const handleCategorySelection = (category: number) => {
    const genre = getPrompts(category);
    setSelectedCategory(genre);
    setSelectedPrompt(genre[Math.round(Math.random() * genre.length)]);
  };

  const handleUse = () => {
    if (selectedCategory) {
      // onUse(selectedCategory);
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
            {!selectedCategory?.length && (
              <div>
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.journal)}
                >
                  Journal
                </Button>
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.scifi)}
                >
                  Science Fiction
                </Button>
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.fantasy)}
                >
                  Fantasy
                </Button>
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.romance)}
                >
                  Romance
                </Button>
              </div>
            )}
            {selectedCategory?.length && (
              <div className="flex flex-col">
                <div>{selectedPrompt?.prompt}</div>
                <div>
                  <Button
                    onClick={() =>
                      setSelectedPrompt(
                        selectedCategory[
                          Math.round(Math.random() * selectedCategory.length)
                        ],
                      )
                    }
                  >
                    Get new prompt
                  </Button>
                </div>
                <div>
                  <Button onClick={() => setSelectedCategory([])}>
                    Choose different genre
                  </Button>
                </div>
              </div>
            )}
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
