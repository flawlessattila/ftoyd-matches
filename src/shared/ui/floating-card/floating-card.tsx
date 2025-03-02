"use client";
import { dark } from "@/shared/theme/colors";
import styled, { css, keyframes } from "styled-components";

const backdroundColors = {
  1: dark[700],
  2: dark[500],
  3: dark[400],
};

type FloatingCardProps = {
  $level?: 1 | 2 | 3;
  $appearWithAnimation?: boolean;
};

const appear = keyframes`
  from {
    transform: scale(0.8, 0.4)
  }
  to {
    transform: scale(1)
  }
`;

const FloatingCard = styled.div<FloatingCardProps>`
  border-radius: 4px;
  ${({ $level }) => css`
    background-color: ${backdroundColors?.[$level || 1]};
  `}

  ${({ $appearWithAnimation }) =>
    $appearWithAnimation
      ? css`
          animation: ${appear} 0.2s ease-in;
        `
      : ``}
`;

export { FloatingCard };
