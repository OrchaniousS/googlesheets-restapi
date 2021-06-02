import Link from "next/link";
import { Segment } from "semantic-ui-react";

export default function About() {
  return (
    <Segment.Group compact>
      <Segment stacked>How to use:</Segment>
      <Segment textAlign="left">1. Fill up your data</Segment>
      <Segment textAlign="left">
        2. Go to your google docs document{" "}
        <Link href="https://docs.google.com/spreadsheets/d/1SbFOsWqZMIz4AtfseNdgplgr7g5boxanemTmIKKydsM/edit#gid=0">
          Link
        </Link>
      </Segment>
      <Segment stacked textAlign="left">
        3. Watch you data collected
      </Segment>
    </Segment.Group>
  );
}
