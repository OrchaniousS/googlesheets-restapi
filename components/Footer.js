import Link from "next/link";
import { Button, Icon } from "semantic-ui-react";

export default function Footer({ styles }) {
  return (
    <footer className={styles}>
      <Link href="https://github.com/OrchaniousS/googlesheets-restapi">
        <Button
          compact
          content={
            <>
              GitHub Repo{"    "}
              <Icon name="github" />
            </>
          }
        ></Button>
      </Link>
    </footer>
  );
}
