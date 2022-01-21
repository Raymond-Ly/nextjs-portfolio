import React from "react";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
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
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiAtom size="5rem" /> <span>Ray</span>
          </a>
        </Link>
      </Div1>
      <Div2>
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
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ray-itech">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/raymond-ly20">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  )
};

export default Header;
