import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const LogoDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media screen and (max-width: 640px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const NavLinksDiv = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media screen and (max-width: 640px) {
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const IconsDiv = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 640px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: px-to-rem(18);
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`
