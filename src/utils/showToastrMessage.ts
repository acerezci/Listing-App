const showToastrMessage = (setState: (e: boolean) => void, duration: number = 1000) => {
  setState(true);

  setTimeout(() => {
    setState(false);
  }, duration);
};

export default showToastrMessage;
