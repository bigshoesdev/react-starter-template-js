import api from "./api";

export const addContact = async (payload) => {
  const { data } = await api.post(`/contact`, payload);
  return data;
};

export const getContact = async (id) => {
  const { data } = await api.get(`/contact/${id}`);
  return data;
};

export const updateContact = async (id, updateData) => {
  const { data } = await api.put(`/contact/${id}`, updateData);
  return data;
};

export const getContacts = async () => {
  const { data } = await api.get(`/contacts`);
  return data;
};
