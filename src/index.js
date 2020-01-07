import React from 'react';
import ReactDOM from 'react-dom';

import {
  Checkbox,
  CheckboxGroup,
  Form,
  Option,
  Output,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextArea,
  TextField,
} from './components';

const Button = 'button';

const AlternativeLayout = ({children, label}) => (
  <Stack space={3} className="bg-blue-400 p-3">
    <label className="text-xl">{label}</label>
    {children}
  </Stack>
);

function App() {
  return (
    <Form onSubmit={values => console.log(values)} className="flex">
      <Stack space={4} className="p-4 w-1/2">
        {/* TextFields */}
        <TextField name="firstName" label="First Name" />
        <TextField name="lastName" label="Last Name" />
        <TextField
          type="number"
          name="money"
          label="Money"
          layout={AlternativeLayout}
        />

        {/* TextAreas */}
        <TextArea name="bio" label="Bio" />

        {/* Select */}
        <Select name="title" label="Title">
          <Option value="" disabled>
            Choose a title
          </Option>
          <Option value="developer">Developer</Option>
          <Option value="designer">Designer</Option>
        </Select>

        {/* Radios */}
        <RadioGroup name="favoriteColor" label="Favorite Color">
          <Radio value="red" label="Red" />
          <Radio value="green" label="Green" />
          <Radio value="blue" label="Blue" />
        </RadioGroup>

        {/* Checkboxes */}
        <CheckboxGroup name="pizzaToppings" label="Pizza Toppings">
          <Checkbox name="pepperoni" label="Pepperoni" />
          <Checkbox name="cheese" label="Cheese" />
          <Checkbox name="mushrooms" label="Mushrooms" />
          <Checkbox name="pineapple" label="Pineapple" />
        </CheckboxGroup>

        <Button>Submit</Button>
      </Stack>
      <Output className="w-1/2 p-4" />
    </Form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
