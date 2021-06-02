import Link from "next/link";
import { Button, Icon } from "semantic-ui-react";

export default function Footer({ styles }) {
  return (
    <footer className={styles}>
      <Button
        compact
        content={
          <>
            GitHub Repo{"    "}
            <Link href="https://github.com/OrchaniousS/googlesheets-restapi">
              <Icon name="github" />
            </Link>
          </>
        }
      />
    </footer>
  );
}
