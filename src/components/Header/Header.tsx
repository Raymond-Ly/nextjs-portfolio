import React from "react";
import {
  Container,
  LogoDiv,
  NavLinksDiv,
  IconsDiv,
  NavLink,
  SocialIcons
} from './HeaderStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiAtom } from 'react-icons/di';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    'About',
    'Tech',
    'Projects'
  ];

  return (
    <Container>
      <LogoDiv>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiAtom size="5rem" /> <span>Ray</span>
          </a>
        </Link>
      </LogoDiv>
      <NavLinksDiv>
        {navLinks.map((navLink) => {
          const anchor = `#${navLink.toLowerCase()}`

          return (
            <li key={navLink}>
              <Link href={anchor} passHref={true}>
                <NavLink>{navLink}</NavLink>
              </Link>
            </li>
          )
        })}
      </NavLinksDiv>
      <IconsDiv>
        <SocialIcons href="https://github.com/ray-itech" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/raymond-ly20" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </IconsDiv>
    </Container>
  )
};

export default Header;
