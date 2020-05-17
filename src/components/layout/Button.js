import styled from 'styled-components';

export default styled.button`
  background: transparent;
  border: 2px solid var(--dark-red);

  &:hover {
    background: var(--dark-red);
    border-color: var(--dark-red);
  }
`;
