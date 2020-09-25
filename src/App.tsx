import React from 'react';
import { Field, Form } from 'react-final-form';

import './styles.css';

import { InputJson } from './components/InputJson';

const FormField = ({ input, name, ...props }) => (
  <>
    <label>{name}</label>
    <Field
      name={name}
      render={({ input }) => {
        return <InputJson {...input} {...props} />;
      }}
    />
  </>
);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/*<div>
        <InputJson
          value={{
            foo: 'FOO',
            baz: 'BAZ',
            a: {
              aa: 42,
            },
          }}
          onChange={() => null}
        />
        </div>*/}

      <Form
        initialValues={{
          array: [42, ['f', false, true], 'foo', { baz: 'BAZ', kus: [7] }],
          boolean: true,
          number: 100500,
          object: {
            foo: '',
            baz: {
              a: 42,
            },
          },
          string: 'foooo',
        }}
        onSubmit={(values) => console.log(values)}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FormField name="array" />
              <FormField name="boolean" />
              <FormField name="number" />
              <FormField name="object" />
              <FormField name="string" />

              <button type="submit">Submit</button>
            </form>
          );
        }}
      />
    </div>
  );
}
