"use client";
import React, { ReactNode } from "react";
import { FloatingCard } from "../floating-card/floating-card";
import styled from "styled-components";
import { resolveThemeColor, ThemeColor } from "@/shared/theme/colors";
import { WarningIcon } from "../icons/icons";

type AlertProps = {
  color?: ThemeColor;
  icon?: ReactNode;
  title?: string;
  $appearWithAnimation?: boolean;
};

const AlertContainer = styled(FloatingCard)`
  padding: 14px 24px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AlertTitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #fff;
`;

const Alert = ({ color, icon, title, $appearWithAnimation }: AlertProps) => {
  return (
    <AlertContainer $level={2} $appearWithAnimation={$appearWithAnimation}>
      <div style={{ color: resolveThemeColor(color) }}>
        {icon || <WarningIcon />}
      </div>
      {title && <AlertTitle>{title}</AlertTitle>}
    </AlertContainer>
  );
};

export { Alert };
