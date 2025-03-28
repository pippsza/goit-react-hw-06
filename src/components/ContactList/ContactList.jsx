import css from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import Contacts from "../Contact/Contact";
export default function ContactList() {
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filteredValues = useSelector((state) => {
    return state.filters.name;
  });

  return (
    <ul className={css.ContactList}>
      {contacts
        .filter((el) => {
          return el.name.toLowerCase().includes(filteredValues.toLowerCase());
        })
        .map((contact) => {
          return (
            <li className={css.listItem} key={contact.id}>
              <Contacts contacts={contact}></Contacts>
            </li>
          );
        })}
    </ul>
  );
}
