export const deleteContact = async (id) => {
  const response = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
  const result = await response.json();
  console.log(result);
};
