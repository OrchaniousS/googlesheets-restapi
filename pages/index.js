import { useState } from "react";
import { Button, Form, Container, Header, Segment } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import "semantic-ui-css/semantic.min.css";
import axios from "axios";

export default function Home() {
  const initialState = { name: "", age: "", salary: "", hobby: "" };
  const [values, setValues] = useState(initialState);

  const URL =
    "https://sheet.best/api/sheets/0c0b0b57-1ee6-4814-8249-adbbe00da2a3";

  const changeHandler = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value });

  function onSubmit(event) {
    event.preventDefault();
    console.log(values);

    try {
      if (values) {
        axios.post(URL, values).then((res) => console.log(res));
        return;
      }
    } catch {
      console.log(err);
    }
  }

  return (
    <Container className={styles.container} textAlign="center">
      <Header as="h2" content="React Google Sheets!" />
      <Form className={styles.form} onSubmit={onSubmit}>
        <Segment.Group raised compact>
          <Segment stacked>
            <Form.Input
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name"
              value={values.name}
              onChange={changeHandler}
            />
            <Form.Input
              name="age"
              type="number"
              label="Age"
              placeholder="Enter your age"
              value={values.age}
              onChange={changeHandler}
            />
            <Form.Input
              name="salary"
              type="number"
              label="Salary"
              placeholder="Enter your salary"
              value={values.salary}
              onChange={changeHandler}
            />
            <Form.Input
              name="hobby"
              type="text"
              label="Hobby"
              placeholder="Enter your hobby"
              value={values.hobby}
              onChange={changeHandler}
            />
            <Button fluid primary type="submit" content="Submit" icon="save" />
          </Segment>
        </Segment.Group>
      </Form>
    </Container>
  );
}
