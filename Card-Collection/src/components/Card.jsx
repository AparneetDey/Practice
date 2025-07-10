import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Card = ({ card: { title, mainImage, thumbnails, totalImages } }) => {
	return (
		<div className='flex flex-col gap-2 w-full p-4 bg-[#ffffff] rounded-3xl '>
			<img className='rounded-3xl max-h-[200px] h-full object-cover ' src={mainImage} alt={title} />

			<div className='grid grid-cols-3 gap-4'>
				{thumbnails.map((image, index) => (
					<img className='h-[70px] w-full object-cover rounded-xl' key={index} src={image} alt={index} />
				))}
			</div>

			<div className='flex justify-between items-center w-full'>
				<h2>{title}</h2>
				<div className='flex flex-row justify-center items-center gap-1.5 text-[12px] '>
					<FontAwesomeIcon icon={faImage} />
					{totalImages}
				</div>
			</div>
		</div>
	)
}

export default Card