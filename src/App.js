import React, { FC } from "react";
import { Formik, Field, Checkbox, Radio, Form } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Formik examples */}
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          isTall: false,
          cookies: [],
          yogurt: ""
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log("submit:", data);
          setSubmitting(false);
          resetForm(true);
        }}
      >
        {/* 
        
        If add Form from "formik", then we could remove handleChange, handleBlur it will
          work anyway
      */}

        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h6>First name & Last name:</h6>
            <Field name="firstname" type="input" as={TextField} />
            &nbsp;
            <Field placeholder="Swan" name="lastname" type="input" />
            {/* you could pass material ui for a Field as Checkbox: as='Checkbox' */}
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <h6>Cookies</h6>
            <Field
              name="cookies"
              type="checkbox"
              value="Chocolate cookies"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="Just cookies"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="Very delicious cookies"
              as={Checkbox}
            />
            <h6>Radio</h6>
            <Field name="yogurt" type="radio" value="Apple" as={Radio} />
            <Field name="yogurt" type="radio" value="Blueberry" as={Radio} />
            <Field name="yogurt" type="radio" value="Bannana" as={Radio} />
            <h6>First name:</h6>
            <TextField
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
            />
            <h6> Last name:</h6>
            <TextField
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
