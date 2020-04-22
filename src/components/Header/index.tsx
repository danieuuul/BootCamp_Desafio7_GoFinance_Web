import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import Hover from '../../assets/hover.png';

interface HeaderProps {
  size?: 'small' | 'large';
  page: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">
          <div>
            <p>Listagem</p>
            <img
              src={Hover}
              alt=""
              style={{ display: page === 'dashboard' ? 'flex' : 'none' }}
            />
          </div>
        </Link>
        <Link to="/import">
          <div>
            <p>Importar</p>
            <img
              src={Hover}
              alt=""
              style={{ display: page === 'import' ? 'flex' : 'none' }}
            />
          </div>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
