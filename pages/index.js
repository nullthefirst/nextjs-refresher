import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a young professional keen on helping businesses leverage
          technology tools to reduce inefficiencies while increasing both
          productivity and profitability. Over the years, I have established a
          successful track record in building innovative digital experiences for
          profitable enterprises.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1>
        <Link href="/posts/first-post">
          <a>&rarr; First Post</a>
        </Link>
      </h1>
    </Layout>
  );
}
