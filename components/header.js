import Image from 'next/image'

const Header = () => {
    return (
      <header className='relative bg-white overflow-x-hidden font-roboto-mono'>
        <div className="absolute origin-bottom-left -rotate-12 w-[9999px] h-[80vh] -mt-4 bg-blue-dark"></div>
        <section className="z-10 relative pt-16 sm:pt-[30vh] max-w-wrapper mx-auto px-4 flex flex-col sm:flex-row sm:justify-between">
          <h1 className="text-white sm:w-[40%]">Doktor Eriksen, MD.</h1>
          <figure className='mt-16 sm:-mt-8'>
            <Image src="/portrett.jpg" width={350} height={450} alt="Portrett av Erik Hystad" />
          </figure>
        </section>
      </header>
    )
}

export default Header