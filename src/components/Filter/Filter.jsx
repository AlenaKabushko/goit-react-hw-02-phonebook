function Filter(props) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        onChange={e => props.onChange(e.currentTarget.value)}
      />
    </label>
  );
}

export default Filter;
