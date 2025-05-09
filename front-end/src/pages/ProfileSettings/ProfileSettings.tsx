import type React from 'react'
import './ProfileSettings.scss'
import { useState } from 'react'
import InputImage from '../../components/InputImage/InputImage'
import NavBar from '../../components/NavBar/NavBar'


const ProfileSettings = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [dragOver, setDragOver] = useState(false);

	// Handle drag over event to add visual effect
	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragOver(true);
	};

	const handleDragLeave = () => {
		setDragOver(false);
	};


	return (
		<>
			<NavBar />
			<main
				className='profile-settings'
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDragLeave}
			>
				<div className="title">
					<h1>Profile settings</h1>
				</div>
				<section className="profile-form">
					<form className="form">
						<InputImage type='profile' setSelectedFile={setSelectedFile} selectedFile={selectedFile} dragOver={dragOver} />
						<div className="form-group">
							<label htmlFor="email" className="form-label">Email</label>
							<input type="email" id="email" className="form-input" placeholder="Enter your email" />
						</div>
						<div className="form-group">
							<label htmlFor="jobTitle" className="form-label">Job Title</label>
							<input type="text" id="jobTitle" className="form-input" placeholder="Enter your job title" />
						</div>
						<div className="form-group">
							<label htmlFor="name" className="form-label">Name</label>
							<input type="text" id="name" className="form-input" placeholder="Enter your name" />
						</div>
						<div className="form-group bio">
							<label htmlFor="bio" className="form-label">Bio</label>
							<textarea id="bio" className="form-input" placeholder="Enter a short introduction.." rows={4}></textarea>
						</div>
						<button type="submit" className="form-submit">
							<span>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path stroke='none' d="M7.99998 1.33337C4.33331 1.33337 1.33331 4.33337 1.33331 8.00004C1.33331 11.6667 4.33331 14.6667 7.99998 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99998 1.33337ZM10.8 6.86671L7.59998 10.0667C7.33331 10.3334 6.93331 10.3334 6.66665 10.0667L5.19998 8.60004C4.93331 8.33337 4.93331 7.93337 5.19998 7.66671C5.46665 7.40004 5.86665 7.40004 6.13331 7.66671L7.13331 8.66671L9.86665 5.93337C10.1333 5.66671 10.5333 5.66671 10.8 5.93337C11.0666 6.20004 11.0666 6.60004 10.8 6.86671Z" fill="#fff" />
								</svg>
							</span>
							Save
						</button>
					</form>
				</section>
			</main>
		</>
	)
}

export default ProfileSettings
