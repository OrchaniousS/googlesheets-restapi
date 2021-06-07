import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Form,
  Container,
  Header,
  Segment,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import axios from "axios";

import About from "../components/About";
import Footer from "../components/Footer";
import CustomPopup from "../components/CustomPopup";
import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";

// import Image from "next/image";

export default function Home() {
  const initialState = { name: "", age: "", salary: "", hobby: "" };
  const [values, setValues] = useState(initialState);
  const [loaderIcon, setLoaderIcon] = useState(false);

  // REST API FOR GOOGLE SHEETS CONNECTION
  const URL =
    "https://sheet.best/api/sheets/0c0b0b57-1ee6-4814-8249-adbbe00da2a3";

  const changeHandler = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value });

  function onSubmit(event) {
    event.preventDefault();

    try {
      if (values) {
        axios.post(URL, values).then((res) => console.log(res));
        setValues(initialState);
      }
    } catch {
      console.log(err);
    }
  }

  const setLoaderHandler = () => {
    setLoaderIcon(true);

    setTimeout(() => {
      setLoaderIcon(false);
    }, 1000);
  };

  const form = (
    <Grid centered>
      <Form className={styles.form} onSubmit={onSubmit}>
        <Segment.Group raised>
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
            <CustomPopup content={"Save data to google sheets"}>
              <Button
                fluid
                primary
                type="submit"
                content="Submit"
                icon="save"
                onClick={setLoaderHandler}
              />
            </CustomPopup>
          </Segment>
        </Segment.Group>
      </Form>
    </Grid>
  );

  return (
    <Grid centered className={styles.home}>
      <Segment color="blue" className={styles.segment}>
        <Container className={styles.container} textAlign="center">
          <Header as="h2" content="React Google Sheets!" />
          {loaderIcon ? (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>

              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          ) : (
            <Grid columns={1}>
              <Grid.Column className={styles.column}>
                <About />
              </Grid.Column>
              <Grid.Column>{form}</Grid.Column>
            </Grid>
          )}
        </Container>
        <Footer styles={styles.footer} />
      </Segment>
    </Grid>
  );
}
