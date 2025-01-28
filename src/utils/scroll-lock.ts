export const enableScrollLock = () => {
  const body: HTMLBodyElement | undefined = document?.getElementsByTagName('body')[0];

  if (body !== undefined) {
    body.style.height = '100%';
    body.style.overflowY = 'hidden';
  }
};

export const disableScrollLock = () => {
  const body: HTMLBodyElement | undefined = document.getElementsByTagName('body')[0];

  if (body !== undefined) {
    body.style.height = 'fit-content';
    body.style.overflowY = 'auto';
  }
};
