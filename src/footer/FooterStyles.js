import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 20px;
background: #F6EAF6;
position: absolute;
bottom: 0;
width: 100%;
border-top: 2px solid #a83299;


@media (max-width: 1000px) {
	padding: 10px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
	justify-content: center;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(300px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(300px, 1fr));
}
`;

export const FooterLink = styled.a`
color: rgba(0, 0, 0, 0.55);
margin-bottom: 10px;
font-size: 16px;
text-decoration: none;

&:hover {
	color : rgba(0, 0, 0, 1);
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 16px;
color: rgba(0, 0, 0, 0.55);
margin-bottom: 10px;
font-weight: bold;
`;
