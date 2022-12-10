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
        <div className="fixed top-0 right-0 p-5 font-bold">info@backstagetalks.com</div>
        <div className="fixed bottom-0 w-64 px-5 font-bold left-0 whitespace-normal">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </div>
        <div className="fixed bottom-0 p-5 right-0 font-bold">
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
          <p>Issue #6</p>
        </div>

        <div className="grid snap-mandatory snap-y items-center justify-center h-screen">
        <div id="issue6" className="snap-center">
          <Image src="/images/backstagetalks_cover_issue_6.png" alt="Cover" width={400} height={0} />
        </div>
        <div id="issue5" className="snap-center">
          <Image src="/images/backstagetalks_cover_issue_5.png" alt="Cover" width={400} height={100} />

        </div>
        <div id="issue4" className="snap-center">
        <Image src="/images/backstagetalks_cover_issue_4.png" alt="Cover" width={400} height={100} />
        </div>
        <div id="issue3" className="snap-center">
        <Image src="/images/backstagetalks_cover_issue_3.png" alt="Cover" width={400} height={100} />
        </div>
        <div id="issue2" className="snap-center">
        <Image src="/images/backstagetalks_cover2017.png" alt="Cover" width={400} height={100} />
        </div>
        <div id="issue1" className="snap-center">
        <Image src="/images/backstagetalks_cover2016_n.png" alt="Cover" width={400} height={100} />
        </div>
        </div>
        
      </main>
    </div>
  );
}
