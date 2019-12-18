const timeout = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const submitForm = async data => {
  await timeout(2000);
};
