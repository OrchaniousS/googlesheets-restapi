import Head from "next/head";

export default function Layout(props) {
  const pageTitle = props.children.type.name;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </div>
  );
}
