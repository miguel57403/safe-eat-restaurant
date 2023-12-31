import { styled } from "styled-components";

export const StyleMenu = styled.div`
  width: 15%;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-right: 1px solid #722ed1;
  padding: 10px;
  background-color: #722ed1;
  gap: 24px;
  border-radius: 8px;
  height: 100%;

  .logo-menu {
    display: flex;
    border-radius: 8px;
    background-color: #722ed1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    line-height: 1.1;
    padding: 10px;
  }

  .logo-menu p {
    margin: 0;
    padding: 0;
  }

  .logo-menu p:first-child {
    font-size: 36px;
  }

  .section-menu {
    flex-grow: 1;
    background-color: #722ed1;
    color: white;
    border: none !important;
  }

  .ant-menu-item:hover {
    color: lightgray !important;
  }

  .footer-menu {
    background-color: #531dab;
    border-radius: 8px;
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }
`;
