import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { useState } from 'react';
import { Prompts, PromptsEnum } from 'types/prompts';
import { style } from './styles';
import { getPrompts } from './modalUtils';
import Button from '../Button/Button';

interface Props {
  onUse: (selectedPrompt: Prompts) => void;
  handleOpen: () => void;
  open: boolean;
}

export const PromptModal = (props: Props) => {
  const { onUse, open, handleOpen } = props;
  const [selectedCategory, setSelectedCategory] = useState<Prompts[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompts | null>(null);

  const handleCategorySelection = (category: number) => {
    const genre = getPrompts(category);
    setSelectedCategory(genre);
    setSelectedPrompt(genre[Math.round(Math.random() * genre.length)]);
  };

  const handleUse = () => {
    if (selectedCategory && selectedPrompt) {
      onUse(selectedPrompt);
      handleOpen();
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
              <div className="flex gap-4">
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.journal)}
                  label="Journal"
                  variant="tertiary"
                />
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.scifi)}
                  label="Science Fiction"
                  variant="tertiary"
                />
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.fantasy)}
                  label="Fantasy"
                  variant="tertiary"
                />
                <Button
                  onClick={() => handleCategorySelection(PromptsEnum.romance)}
                  label="Romance"
                  variant="tertiary"
                />
              </div>
            )}
            {selectedCategory.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <div>{selectedPrompt?.prompt}</div>
                <div className="flex gap-4 w-full justify-around">
                  <div>
                    <Button
                      onClick={() =>
                        setSelectedPrompt(
                          selectedCategory[
                            Math.round(Math.random() * selectedCategory.length)
                          ],
                        )
                      }
                      label="Get new prompt"
                      variant="tertiary"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={() => setSelectedCategory([])}
                      label="Choose different genre"
                      variant="tertiary"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-4 w-full justify-center mt-4">
              <Button onClick={handleOpen} label="Cancel" />
              <Button onClick={handleUse} label="Use" />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
