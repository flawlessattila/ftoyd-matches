"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children?: ReactNode;
};

const Wrapper = styled.div`
  padding: 0 42px;
`;

const Container = styled.div`
  padding: 42px 0;
  max-width: 1836px;
  margin: 0 auto;
`;

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export { DefaultLayout };
