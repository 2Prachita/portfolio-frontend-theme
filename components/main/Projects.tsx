import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>

            <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.js portfolio'
            description='This is the discription for the projects. Just for testing the full texts would be added later'
            />

            <ProjectCard
            src='/CardImage.png'
            title='Interactive Website Card'
            description='This is the discription for the projects. Just for testing the full texts would be added later'
            />

            <ProjectCard
            src='/SpaceWebsite.png'
            title='Space Themed Website'
            description='This is the discription for the projects. Just for testing the full texts would be added later'
            />

        </div>
        
    </div>
  )
}

export default Projects