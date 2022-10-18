function ContactList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.allContacts.map(obj => (
          <li key={obj.id}>
            <p>
              {obj.name}: {obj.number}
            </p>
            <button type="button" onClick={() => props.onDelete(obj.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
