export const saveEntry = (editorContents: string, title: string, wordCount: number, isPublic = false, prompt = '') => ({
      type: 'ADD_ENTRY',
      payload: {
        contents: editorContents,
        title,
        entry_length: wordCount,
        isPublic,
        entry_prompt: prompt
      }});

export const editEntry = (entryId: string, editorContents: string, title: string, wordCount: number, isPublic?: boolean, isDeleted?: boolean, prompt = '') => ({
      type: 'EDIT_ENTRY',
      payload: {
        entry_id: entryId,
        contents: editorContents,
        title,
        entry_length: wordCount,
        isPublic,
        isDeleted,
        entry_prompt: prompt
      }});

export const deleteEntry = (id: string) => ({
//   type: types.GET_CREDIT_POLICY_STATEMENTS,
//   payload,
});

