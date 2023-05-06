const contacts = require('./contacts');
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

const invokeAction = async ({action, id, name, email, phone}) => {
  switch(action) {
    case "list":
        const allContacts = await contacts.listContacts();
        return console.table(allContacts);
        break;
      
    case "get":
        const contactId = await contacts.getContactById(id);
        return console.log(contactId);
        break;
      
    case "add":
        const newId = await contacts.addContact({name, email, phone});
        return console.log(newId);
        break;
            
    case "remove": 
        const removeId = await contacts.removeContact(id);
        return console.log(removeId);
        break;
      
    default:
        console.warn("\x1B[31m Unknown action type!");
    };
}

invokeAction(options);