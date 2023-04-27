const CONTACTS_STORAGE_KEY = "contacts";

const LocalStorage = {
  getContacts: () => {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY));
    return contacts ?? [];
  },

  setContacts: (contacts) => {
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  },

  deleteContact: (id) => {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY));
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
  },
  addContact: (contact) => {
    const contacts = LocalStorage.getContacts();
    contacts.push(contact);
    LocalStorage.setContacts(contacts);
  },
  updateContact: (updatedContact) => {
    const contacts = LocalStorage.getContacts();
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    LocalStorage.setContacts(updatedContacts);
  },
  getContactById: (id) => {
    const contacts = LocalStorage.getContacts();
    return contacts.find((contact) => contact.id === id);
  },
};


export default LocalStorage;
