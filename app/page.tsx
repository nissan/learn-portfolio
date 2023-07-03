import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          See the portfolio of things I am learning about&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            I built this using templates for <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              priority
            />
            and configured automatic deployments of this code to{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </span>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        Highlight Reel
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="my-4" >

          <Link href="/reactflow" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learning ReactFlow{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Page with work done following the <Link className="text-red-300" href="https://reactflow.dev/docs/quickstart/">docs</Link> for <Link className="text-red-300" href="https://reactflow.dev/">ReactFlow</Link>
          </p>
        </div>
        <div className="my-4" >
          <h2 className={`mb-3 text-2xl font-semibold `}>
            <Link href="/zustand">
              Learning Zustend{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Page with work done learning <Link className="text-red-300" href="https://github.com/pmndrs/zustand#readme">Zustand</Link> following <Link className="text-red-300" href="https://www.youtube.com/watch?v=fZPgBnL2x-Q">this video tutorial</Link>          </p>
        </div>
      </div>
    </main >
  )
}
