"use client";
import React, { ReactNode } from "react";
import StyledComponentsRegistry from "@/shared/lib/styled-components-registry";
import { createGlobalStyle } from "styled-components";
import { dark } from "@/shared/theme/colors";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/shared/lib/get-query-client";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${dark[800]};
    color: #FFF;
  }
`;

const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        {children}
        <ReactQueryDevtools />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export { Providers };
