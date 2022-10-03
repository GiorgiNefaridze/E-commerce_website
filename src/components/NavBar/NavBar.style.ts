import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const NavBarWrapper = styled.nav<Props | HTMLElement>`
  width: 100%;
  height: 105px;
  padding-inline: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};

  img {
    width: 90px;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;
`;

export const ChangeLang_Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0 60px;
`;
