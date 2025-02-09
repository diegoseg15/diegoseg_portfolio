import { useState, useEffect } from 'react'

export function Carousel () {
  const [projects, setProjects] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = process.env.React_APP_GITHUB_TOKEN
        // console.log('Token:', token)

        const response = await fetch(
          'https://api.github.com/users/diegoseg15/repos',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }
        )

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const result = await response.json()
        setData(result)
        // console.log(result);

        const officialProjects = result.filter(project =>
          project.topics?.includes('official')
        )

        const formattedProjects = await Promise.all(
          officialProjects.map(async project => {

            // Obtener el contenido del README.md
            const readmeResponse = await fetch(project.url + '/readme', {
              headers: {
                Authorization: `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28'
              }
            })

            let readmeContent = ''
            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json()
              readmeContent = atob(readmeData.content) // Decodificar base64
            }

            // Buscar URLs de las imágenes en el README.md
            const imageUrls = []
            const regex = /!\[.*?\]\((.*?)\)/g
            let match
            while ((match = regex.exec(readmeContent)) !== null) {
              imageUrls.push(match[1])
            }

            return {
              id: project.id,
              title: project.name,
              description: project.description || 'No description available.',
              imageUrl: imageUrls[0] || "", // Usa la primera imagen encontrada o la imagen del avatar
              languages: project.topics.filter(topic=>topic!=="official") || [],
            }
          })
        )

        setProjects(formattedProjects)
      } catch (error) {
        console.error('Error al obtener los proyectos:', error)
      }
    }

    fetchProjects()
  }, [])

  const handlePrevious = () => {
    setDirection('left')
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
      <h3 className='text-center font-bold text-4xl pb-20'>Proyectos</h3>
      <div>
        <div className='rounded-lg dark:shadow-lg shadow-xl dark:shadow-sky-400 shadow-gray-500 relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center transition-transform duration-500 ease-in-out transform-gpu overflow-hidden'>
            {projects.map((project, index) =>
              project.imageUrl ? (
                <div
                  key={project.id}
                  className={`relative overflow-hidden rounded-lg ${
                    index === currentIndex
                      ? `block ${
                          direction === 'right'
                            ? 'animate-slide-right'
                            : 'animate-slide-left'
                        }`
                      : 'hidden'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className='w-full max-h-[450px] md:h-[400px] object-cover'
                  />
                </div>
              ) : null
            )}
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${
                  project.imageUrl ? '' : 'col-span-2 md:py-24 py-16 md:px-40'
                } space-y-4 text-left ${
                  index === currentIndex
                    ? `block animate-${
                        direction === 'right' ? 'slide-right' : 'slide-left'
                      }`
                    : 'hidden'
                }`}
              >
                <h3 className='text-2xl md:text-3xl font-bold text-primary-foreground md:px-0 px-5'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground text-sm md:text-base md:pr-32 md:px-0 px-5'>
                  {project.description}
                </p>
                <div className='md:px-0 px-5'>
                  <div className='flex gap-4 font-bold text-primary-foreground text-sm md:text-base'>
                    {project.languages.map((language, index) => (
                      <span key={index}>{language}</span>
                    ))}
                  </div>
                </div>
                <div className='md:px-0 px-5'>
                  <a
                    href={`https://github.com/diegoseg15/${project.title}`}
                    target='_blank'
                    className='inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className='md:absolute md:top-1/2 left-0 right-0 md:-translate-y-1/2 flex justify-between gap-4 px-4 md:py-0 py-8'>
            <button
              onClick={handlePrevious}
              className='inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
            >
              <ArrowLeftIcon className='h-5 w-5' />
            </button>
            <button
              onClick={handleNext}
              className='inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
            >
              <ArrowRightIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </svg>
  )
}

function ArrowRightIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </svg>
  )
}
