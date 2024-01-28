import styled, { css } from 'styled-components'

interface ButtonProps {
  color?: 'red' | 'green' | 'dark';
  isLarge?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const colorToCss = (color: ButtonProps['color']) => {
  switch (color) {
    case 'dark':
      return css`
        background: ${props => props.theme.gradient};
        color: white;
      `
  }

  return css`
    background-color: ${props => props.theme.cardBackground};
    color: ${props => props.theme.color};
    
    &:hover {
      background-color: ${props => props.theme.theme == 'dark' ? 'black' : '#dbdbdb'};
      color: ${props => props.theme.color};
      /* background-color: #212121; */
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-top: 1em !important;
  padding-bottom: 1em !important;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:focus {
    outline: 0;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }

  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`

export const Button: React.FC<ButtonProps> = ({ children, color, isLarge, onClick }) => {
  return (
    <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button