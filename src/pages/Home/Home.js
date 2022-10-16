import { Box } from '../../components/Box';
import * as React from 'react';
import { HomeBox, HomeText, HomeTitle } from './Home.styled';
import ryuk from 'img/mainHome.jpg';

export const Home = () => {
	return (
		<Box
			width="800px"
			pb={2}
			pt={2}
			pl={6}
			pr={6}
			ml="auto"
			mr="auto"
			mt={5}
			mb={5}
			minHeight="1000px"
			borderRadius="10px"
			boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
			bg="black"
		>
			<HomeBox>
				<HomeTitle>Welcome to the page of the God of Death</HomeTitle>
				<HomeText>
					Log in for a unique opportunity to complete your own Death Note
				</HomeText>
				<div>
					<img src={ryuk} width="700" alt="godOfGeath" />
				</div>
			</HomeBox>
		</Box>
	);
};
