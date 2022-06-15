import Head from "next/head";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Next online store</title>
        <meta
          name="description"
          content="Demo online store project Created by Emad Mhardawi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>header</header>

      <main>{props.children}</main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
