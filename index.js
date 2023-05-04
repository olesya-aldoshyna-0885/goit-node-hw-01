const contacts = require('./contacts');
// const argv = require("yargs").argv;

const invokeAction = async ({action, id, name, email, phone}) => {
  switch(action) {
    case "read":
      const allContacts = await contacts.listContacts();
        return console.log(allContacts);
    case "getById":
        const contactId = await contacts.getContactById();
        return console.log(contactId);
    case "addId":
        const newId = await contacts.addContact({name, email, phone});
        return console.log(newId);
    case "updateContact":
        const updateId = await contacts.removeContact(id, {name, email, phone});
        return console.log(updateId);
    case "removeContact":
        const removeId = await contacts.removeContact(id);
        return console.log(removeId);
    };
}

// invokeAction({action: "read"});
// invokeAction({action: "getById"});
// invokeAction({action: "addId", name: "Olesya", email: "olesya85@gmail.com", phone: "0966446191"});
// invokeAction({action: "updateContact", id: "AeHIrLTr6JkxGE6SN-0Rw", name: "Olesya", email: "olesya85@i.ua", phone: "0664040922"});
// invokeAction({ action: "removeContact", id: "AeHIrLTr6JkxGE6SN-0Rw"});
