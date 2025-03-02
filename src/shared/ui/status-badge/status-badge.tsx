"use client";
import { resolveThemeColor, ThemeColor } from "@/shared/theme/colors";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type StatusBadgeProps = {
  color?: ThemeColor;
  children?: ReactNode;
};

const ContainerStyled = styled.div<{ color?: string }>`
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  min-width: 92px;
  text-align: center;
  color: #fff;

  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;

const StatusBadge = ({ color, children }: StatusBadgeProps) => {
  return (
    <ContainerStyled color={resolveThemeColor(color)}>
      {children}
    </ContainerStyled>
  );
};

export { StatusBadge };
