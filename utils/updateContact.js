export async function updateContact(id, updatedContact) {
  const res = await fetch(`/api/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedContact),
  });
  const data = await res.json();
  return data;
}
