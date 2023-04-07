export const fetchContacts = async (setData) => {
  const response = await fetch("/api/contacts");
  const apiData = await response.json();
  setData(apiData);
};
