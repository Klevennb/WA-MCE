export const saveEntry = (editorContents: string, title: string, wordCount: number, isPublic = false) => ({
      type: 'ADD_ENTRY',
      payload: {
        contents: editorContents,
        title,
        entry_length: wordCount,
        isPublic
      }});

export const editEntry = (entryId: string, editorContents: string, title: string, wordCount: number, isPublic?: boolean, isDeleted?: boolean) => ({
      type: 'EDIT_ENTRY',
      payload: {
        entry_id: entryId,
        contents: editorContents,
        title,
        entry_length: wordCount,
        isPublic,
        isDeleted
      }});

export const deleteEntry = (id: string) => ({
//   type: types.GET_CREDIT_POLICY_STATEMENTS,
//   payload,
});

