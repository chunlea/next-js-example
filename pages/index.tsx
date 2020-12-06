import Head from 'next/head'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col px-0 py-2 justify-center items-center'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='px-20 py-0 flex-1 flex flex-col justify-center items-center'>
        <h1 className='text-7xl font-bold mb-4'>
          Welcome to{' '}
          <a
            href='https://nextjs.org'
            className='text-blue-600 no-underline hover:underline focus:underline active:underline'>
            Next.js!
          </a>
        </h1>

        <p className='text-2xl mt-4'>
          Get started by editing{' '}
          <code className='bg-gray-100 p-2 rounded-md'>pages/index.tsx</code>
        </p>
      </main>

      <footer className='border-t-2 h-24 w-full border-gray-300 flex justify-center items-center'>
        Next.js example with TypeScript and TailwindUI
      </footer>
    </div>
  )
}
