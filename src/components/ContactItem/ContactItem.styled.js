import styled from 'styled-components';

export const LiContactItem = styled.li`
	border: 2px solid #f27b7b;
	background: transparent;
	position: relative;
	margin-bottom: 20px;
	padding: 16px 10px;
	color: #9e0e0e;

	:hover {
		z-index: 1;
	}

	:before {
		border: 2px solid #d39292;
		position: absolute;
		top: -14px;
		padding: 2px 10px;
		font-size: 11px;
		font-weight: bold;
		color: #9e0e0e;
		background: #e2bbbb;
		counter-increment: li;
		content: counter(li);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
	}

	:hover:before {
		background: #9e0e0e;
		color: #fff;
		-webkit-transform: translate(-12px, 0);
		-ms-transform: translate(-12px, 0);
		-o-transform: translate(-12px, 0);
		transform: translate(-12px, 0);
	}

	:after {
		content: '';
		position: absolute;
		-webkit-transition-duration: 0.4s;
		transition-duration: 0.4s;
		-webkit-transition-property: width;
		transition-property: width;
		z-index: -1;
		background: #d19c9c4a;

		height: 100%;
		left: 0;
		top: 0;
		width: 0;
	}

	:hover:after {
		width: 100%;
	}
`;

export const BtnDelete = styled.button`
	margin-left: 20px;
	width: 20px;
	height: 20px;

	position: absolute;
	top: 15px;
	right: 20px;
	width: 24px;
	height: 24px;
	opacity: 0.5;
	cursor: pointer;
	transition: opacity ease 0.5s;

	&:hover {
		opacity: 1;
	}

	::before,
	::after {
		content: '';
		position: absolute;
		top: 8px;
		left: -2px;
		width: 24px;
		height: 3px;
		background: #f27b7b;
		display: block;
		/* display: ${props => {
			if (props.onLoad) {
				return 'none';
			} else {
				return 'block';
			}
		}}; */
	}

	::before {
		transform: rotate(45deg);
	}

	::after {
		transform: rotate(-45deg);
	}
`;
