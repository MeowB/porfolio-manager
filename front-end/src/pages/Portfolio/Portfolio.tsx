import { useState, useEffect } from "react"
import { readProjectsByUser } from "../../api/projects"

import ProjectCard from "../../components/ProjectCard/ProjectCard"
import powerIcon from '../../resources/favicon.ico'
import banner from '../../resources/profile-bg.svg'
import type { ProjectType } from "../../types/Project"
import './Portfolio.scss'

const Portfolio = () => {
	const [projects, setProjects] = useState<ProjectType[]>([])
	const userId = localStorage.getItem('userId')?.toString()

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const token = localStorage.getItem('token')
				const data = await readProjectsByUser(userId, token)
				console.log(data[0])
				setProjects(data)
			} catch (error) {
				console.error("Error fetching projects", error)
			}
		}

		fetchProjects()
	}, [])



	return (
		<>
			<header className="banner">
				<img src={banner} alt="" />
			</header>
			<main className="portfolio">
				<div className="profile-image">
					<img src="https://placehold.co/160" alt="" />
				</div>
				<div className="portfolio-content">
					<div className="title">
						<h1>Name Lastname</h1>
						<p>Front-end developer</p>
					</div>
					<button className="contact-button">
						<span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.6666 2.66663H3.33331C2.80288 2.66663 2.29417 2.87734 1.9191 3.25241C1.54403 3.62749 1.33331 4.13619 1.33331 4.66663V11.3333C1.33331 11.8637 1.54403 12.3724 1.9191 12.7475C2.29417 13.1226 2.80288 13.3333 3.33331 13.3333H12.6666C13.1971 13.3333 13.7058 13.1226 14.0809 12.7475C14.4559 12.3724 14.6666 11.8637 14.6666 11.3333V4.66663C14.6666 4.13619 14.4559 3.62749 14.0809 3.25241C13.7058 2.87734 13.1971 2.66663 12.6666 2.66663ZM3.33331 3.99996H12.6666C12.8435 3.99996 13.013 4.0702 13.1381 4.19522C13.2631 4.32025 13.3333 4.48981 13.3333 4.66663L7.99998 7.91996L2.66665 4.66663C2.66665 4.48981 2.73688 4.32025 2.86191 4.19522C2.98693 4.0702 3.1565 3.99996 3.33331 3.99996ZM13.3333 11.3333C13.3333 11.5101 13.2631 11.6797 13.1381 11.8047C13.013 11.9297 12.8435 12 12.6666 12H3.33331C3.1565 12 2.98693 11.9297 2.86191 11.8047C2.73688 11.6797 2.66665 11.5101 2.66665 11.3333V6.18663L7.65331 9.23329C7.75466 9.2918 7.86962 9.32261 7.98665 9.32261C8.10367 9.32261 8.21863 9.2918 8.31998 9.23329L13.3333 6.18663V11.3333Z" fill="#677489" />
							</svg>
						</span>
						Contact
					</button>
					<div className="bio">
						<h3>Bio</h3>
						<p>Passionate front-end developer with a knack for creating intuitive and visually appealing user interfaces. Always eager to learn and explore new technologies.</p>
					</div>
				</div>

				<div className="projects">
					<h2>Projects</h2>
					{
						projects.map((project) => <ProjectCard key={project.projectName} type="portfolio" project={project} />)
					}
				</div>
			</main>
			<footer>
				<p className="power-by">power by </p>

				<div className="logo">
					<img src={powerIcon} alt="" />
					<p className="logo-text">MeowB</p>
				</div>
			</footer>
		</>
	)
}

export default Portfolio
