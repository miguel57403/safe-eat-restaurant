import { styled } from "styled-components";

export const StyledNotification = styled.div`
  width: 13%;
  min-width: 13%;
  min-width: 13%;
  height: calc(100vh - 20px);
  overflow-y: auto;
  padding-right: 8px;

  .title-notification {
    padding: 10px 0;
  }
  .card-notification {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #391085;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #722ed1;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;
