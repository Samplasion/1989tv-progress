import Image from 'next/image'
import { Fragment } from 'react';

const number = (digit: string) => `https://www.gstatic.com/delight/srp/delightscavengerhunt/thunder/${digit}.svg`;

export default async function Home() {
  const progress = await getData();
  const digits = progress.split("").map((digit, index) => <Fragment key={index}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className={"digit"} alt={digit} src={number(digit)} />
  </Fragment>);

  return (
    <main className="flex flex-col items-center justify-center px-4 py-2 text-center">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">1989 (Taylor&apos;s Version)</h1>
      <p className="text-2xl opacity-80">Vault Progress Tracker</p>
      <div className="flex flex-row">
        {digits}
      </div>
      <progress value={parseInt(progress)/33000000}></progress>
    </main>
  )
}

async function getData() {
  const res = await fetch("https://www.google.com/httpservice/retry/DelightRiddlesService/GetSolutionCount?reqpld=%5B4%5D", {
    cache: "no-cache",
  });
  const text = await res.text();

  return text.match(/(\d{6,7})/g)![0];
}