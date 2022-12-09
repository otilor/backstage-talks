import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          className="px-5 py-5"
          src="/images/logo.png"
          alt="Cover"
          width={300}
          height={1000}
        />
        <div className="fixed top-0 right-0">info@backstagetalks.com</div>
        <div className="fixed bottom-0 w-64 px-5 font-bold left-0 whitespace-normal">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </div>
        <div className="fixed bottom-0 right-0 w-16">
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
        </div>
      </main>
    </div>
  );
}
