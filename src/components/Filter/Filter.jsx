import { Label, Input } from './Filter.styled';

function Filter(props) {
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="name"
        onChange={e => props.onChange(e.currentTarget.value)}
      />
    </Label>
  );
}

export default Filter;
