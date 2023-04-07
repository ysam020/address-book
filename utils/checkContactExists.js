export const checkContactExists = async (phoneNumber) => {
  const response = await fetch(`/api/contacts?contact=${phoneNumber}`);
  const data = await response.json();
  return data !== undefined;
};
