import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--white);
    display: flex;
    justify-content: center;
    margin-right: 0.5rem;
  }

  .main-name {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export default Wrapper;
