import React from 'react'

const Music = () => {
  return (
    <>
      <h1 className='flex justify-center text-4xl font-semibold mt-8 mb-2'>Music</h1>
      <h2 className='flex justify-center text-xl'>Soothe your nerves from the work stress sing the stress out</h2>
      <div className='flex justify-center'>
        <div className='ml-6 mr-2 my-8'><iframe width="590" height="360" src="https://open.spotify.com/embed/album/2sLy2qd4DMAQwQbnCJ0qCW?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className='mr-6 ml-2 my-8'><iframe src=" https://open.spotify.com/embed/album/1jycaTI1nNXVOl8BAsh7cl?utm_source=generator" width="590" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='ml-6 mr-2 my-8'><iframe width="590" height="360" src="https://open.spotify.com/embed/album/7ocbK0qflsQmECg0t4Eu14?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className='mr-6 ml-2 my-8'><iframe src="https://open.spotify.com/embed/artist/0dUAmhoKaryMpSVRlXCwQL?utm_source=generator" width="590" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
}

export default Music