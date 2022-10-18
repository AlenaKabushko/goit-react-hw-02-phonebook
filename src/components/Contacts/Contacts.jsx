import {
  ContactsListStyled,
  ContactsItemStyled,
  ButtonStyle,
  TextStyle,
} from './Contacts.styled';

function ContactList(props) {
  return (
    <div>
      <ContactsListStyled>
        {props.allContacts.map(obj => (
          <ContactsItemStyled key={obj.id}>
            <TextStyle>
              {obj.name}: {obj.number}
            </TextStyle>
            <ButtonStyle type="button" onClick={() => props.onDelete(obj.id)}>
              Delete
            </ButtonStyle>
          </ContactsItemStyled>
        ))}
      </ContactsListStyled>
    </div>
  );
}

export default ContactList;
