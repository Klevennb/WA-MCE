import { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

type Props = {
  handleSave: (words: string, count: number) => void;
  saving: boolean;
  storyToEdit: string;
};

export const MCEEditor = (props: Props) => {
  const { handleSave, saving, storyToEdit } = props;
  const editorRef = useRef<TinyMCEEditor | null>(null);

  useEffect(() => {
    if (saving && editorRef.current) {
      try {
        handleSave(
          editorRef.current.getContent(),
          editorRef.current.plugins.wordcount.getCount(),
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [handleSave, saving]);

  return (
    <div className="mb-12 w-full flex justify-center">
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue={storyToEdit}
        init={{
          height: 300,
          width: '800px',
          menubar: true,
          plugins: 'wordcount',
          toolbar: 'wordcount',
        }}
      />
    </div>
  );
};
