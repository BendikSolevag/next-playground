import Star from '../components/icons/star'
import Eye from '../components/icons/eye'
import Arrow from '../components/icons/arrow'

const Repositories = () => {
    return (
        <section className='max-w-wrapper mx-auto px-4 py-16 text-blue-dark'>
          <h2 className=''>Repositories TODO GJØR DYNAMISK MED GitHub</h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <a className="group border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark px-4 py-8" href="https://www.nrk.no">
                  <h3 className="mb-2">Reponavn</h3>
                  <p className='mb-4'>En setning som beskriver repoet hentet fra GitHub</p>
                  <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <span className='flex items-center'>
                            <Star className="mr-1" />
                            2
                        </span>
                        <span className='flex items-center ml-2'>
                            <Eye className="mr-1" />
                            1
                        </span>
                    </div>
                    <Arrow />
                  </div>
              </a>
              <a className="group border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark px-4 py-8" href="https://www.nrk.no">
                  <h3 className="mb-2">Reponavn</h3>
                  <p className='mb-4'>En setning som beskriver repoet hentet fra GitHub</p>
                  <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <span className='flex items-center'>
                            <Star className="mr-1" />
                            2
                        </span>
                        <span className='flex items-center ml-2'>
                            <Eye className="mr-1" />
                            1
                        </span>
                    </div>
                    <Arrow />
                  </div>
              </a>
              <a className="group border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark px-4 py-8" href="https://www.nrk.no">
                  <h3 className="mb-2">Reponavn</h3>
                  <p className='mb-4'>En setning som beskriver repoet hentet fra GitHub</p>
                  <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <span className='flex items-center'>
                            <Star className="mr-1" />
                            2
                        </span>
                        <span className='flex items-center ml-2'>
                            <Eye className="mr-1" />
                            1
                        </span>
                    </div>
                    <Arrow />
                  </div>
              </a>
          </nav>
        </section>
    )
}

export default Repositories