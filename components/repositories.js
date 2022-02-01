import React, { useState } from 'react';

import Star from '../components/icons/star'
import Eye from '../components/icons/eye'
import Arrow from '../components/icons/arrow'

const Repositories = ({repos}) => {
    const [visibles, setVisibles] = useState(4);

    return (
        <section className='max-w-wrapper mx-auto px-4 py-16 text-blue-dark'>
          <h2 className=''>Repositories</h2>
          {repos && repos.length > 0 && (
        <>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {repos.map((repo, i) => {
                if (i < visibles){
                    return(
                        <a className="group border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark px-4 py-8 flex flex-col" href={repo.html_url}>
                            {repo.name && (
                                <h3 className="mb-2">{repo.name}</h3>
                            )}
                            {repo.description && (
                                <p className='mb-4'>{repo.description}</p>
                            )}
    
                            <div className='flex justify-between items-center mt-auto'>
                                <div className='flex'>
                                    <span className='flex items-center'>
                                        <Star className="mr-1" />
                                        {repo.stargazers_count}
                                    </span>
                                    <span className='flex items-center ml-2'>
                                        <Eye className="mr-1" />
                                        {repo.watchers_count}
                                    </span>
                                </div>
                                <Arrow />
                            </div>
                        </a>
                )
            }})}
            </nav>
            {visibles == 4 && (
                <div className='mt-8 flex justify-center'>
                    <button 
                        className='border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark p-4 flex items-center' 
                        onClick={() => setVisibles(9999)}>
                            Show more 
                            <Arrow className="ml-2 transform rotate-90" />
                    </button>
                </div>
            )}
            {visibles == 9999 && (
                <div className='mt-8 flex justify-center'>
                    <button 
                    className='border-2 border-blue-dark hover:border-purple-dark hover:text-purple-dark p-4 flex items-center' 
                    onClick={() => setVisibles(4)}>
                        Show less 
                        <Arrow className="ml-2 transform -rotate-90" />
                    </button>
                </div>
            )}
          </>
          )}
        </section>
    )
}

export default Repositories