import React from 'react';
import {
  Checkboxes,
  Input,
  RadioButtons,
  Select,
  TextArea,
  useTopState
} from 'top-state-hook';

const checkboxList = [
  {name: 'color.red', text: 'Red', initialValue: true},
  {name: 'color.green', text: 'Green'},
  {name: 'color.blue', text: 'Blue'}
];

const radioButtonList = [
  {text: 'Chocolate', value: 'choc'},
  {text: 'Strawberry', value: 'straw'},
  {text: 'Vanilla', value: 'van'}
];

export default function FormDemo() {
  return (
    <div>
      <label htmlFor="firstName">
        First Name
        <Input id="firstName" name="user.firstName" />
      </label>
      <Checkboxes list={checkboxList} />
      <RadioButtons
        list={radioButtonList}
        name="favoriteFlavor"
        initialValue="straw"
      />
      <label htmlFor="favColor">
        Favorite Color
        <Select id="favColor" name="user.favoriteColor" initialValue="green">
          <option>red</option>
          <option>green</option>
          <option>blue</option>
        </Select>
      </label>
      <label className="block" htmlFor="comment">
        Comment
        <TextArea
          id="comment"
          name="feedback.comment"
          placeholder="enter your comment here"
        />
      </label>
    </div>
  );
}
