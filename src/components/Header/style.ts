import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 750px) {
    justify-content: center;
  }

  background-color: var(--color-primary);
  box-shadow: 0 4px 33px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 78px;
`;
