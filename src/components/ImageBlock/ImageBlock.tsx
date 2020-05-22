import React from 'react';

import './styles.css';

import { IImageBlock } from '../../interfaces';

interface IImg extends IImageBlock {
	src: string;
	dataId: string;
	alt: string;
}

export const ImageBlock = ({ src, dataId, alt }: any): any => {
	return (
		<div className="image-block__container">
			<img className="image-block__img" src={src} data-id={dataId} alt={alt} />
			<span className="image-block__close-icon">&times;</span>
		</div>
	);
};
