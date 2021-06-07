import Link from "next/link";
import { Icon, Segment } from "semantic-ui-react";

export default function Footer({ styles }) {
  return (
    <footer className={styles}>
      <Link href="https://github.com/OrchaniousS/googlesheets-restapi">
        {/* <Button
          compact
          content={
            <> */}
        <Segment color="grey">
          GitHub Repo
          <Icon name="github" />
        </Segment>
        {/* </> */}
        {/* }
        ></Button> */}
      </Link>
    </footer>
  );
}
