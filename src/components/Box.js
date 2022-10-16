import styled from 'styled-components';
import {
	typography,
	space,
	color,
	layout,
	border,
	shadow,
	background,
} from 'styled-system';

export const Box = styled('div')(
	typography,
	space,
	color,
	layout,
	border,
	shadow,
	background
);
