import Link from 'next/link'; 

export default function FirstPost() {
  return (
    <>
      <h1>
        Hello, I'm Sarah and these days I'm into climbing :) 
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}