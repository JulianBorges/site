
// Store for the chat dialog state
let isOpen = false;
let setIsOpenCallback: ((open: boolean) => void) | null = null;

export const openChatDialog = () => {
  if (setIsOpenCallback) {
    setIsOpenCallback(true);
  }
};

export const closeChatDialog = () => {
  if (setIsOpenCallback) {
    setIsOpenCallback(false);
  }
};

export const registerChatDialogCallback = (callback: (open: boolean) => void) => {
  setIsOpenCallback = callback;
  return () => {
    setIsOpenCallback = null;
  };
};
