import Image from 'next/image'

const Header = () => {
    return (
      <header className='relative bg-white overflow-hidden font-roboto-mono'>
        <div className="absolute origin-bottom-left -rotate-12 w-[9999px] h-[70vh] -mt-4 bg-blue-dark"></div>
        <section className="z-10 relative pt-16 sm:pt-[20vh] max-w-wrapper mx-auto px-4 flex flex-col sm:flex-row sm:justify-between">
          <div className="text-white sm:w-[40%]">
              <h1>Erik Hystad</h1>
              <p className="mt-4 text-lead-medium">Master's student and AI enthusiast at the University of Bergen, Norway.</p>
          </div>
          <figure className='mt-16 sm:-mt-8'>
            <Image src="/portrett.jpg" width={350} height={450} alt="Portrett av Erik Hystad" />
          </figure>
        </section>
      </header>
    )
}

export default Header