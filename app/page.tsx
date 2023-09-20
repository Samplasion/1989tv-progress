import Image from 'next/image'
import { Fragment } from 'react';

const number = (digit: string) => `https://www.gstatic.com/delight/srp/delightscavengerhunt/thunder/${digit}.svg`;

export default async function Home() {
  const progress = await getData();
  const digits = progress.split("").map((digit, index) => <Fragment key={index}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className={"digit"} alt="" src={number(digit)} />
  </Fragment>);
  const description = `${progress} puzzles completed so far`;

  return (
    <main className="flex flex-col items-center justify-center px-4 py-2 text-center">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">1989 (Taylor&apos;s Version)</h1>
      <p className="text-2xl opacity-80">Vault Progress Tracker</p>
      <div className="flex flex-row my-4" aria-description={description} title={description}>
        {digits}
      </div>
      <progress className="mt-4" value={parseInt(progress)/33000000}></progress>
      <p className="text-sm pt-6">
        Made with 🩵 and 🎧 by Samplasion {"\u00b7 "}
        <a href="https://github.com/Samplasion/1989tv-progress">Source Code</a>
      </p>
    </main>
  )
}

async function getData() {
  const res = await fetch("https://www.google.com/httpservice/retry/DelightRiddlesService/GetSolutionCount?reqpld=%5B4%5D", {
    cache: "no-cache",
  });
  const text = await res.text();

  return text.match(/(\d{6,8})/g)![0];
}