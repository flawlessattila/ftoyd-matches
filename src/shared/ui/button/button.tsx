"use client";
import { primary } from "@/shared/theme/colors";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  startSlot?: ReactNode;
  endSlot?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  min-height: 56px;
  padding: 15px 40px;

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  color: #fff;

  border-radius: 4px;
  background-color: ${primary[500]};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.disabled
      ? css`
          color: #787878;
          background-color: ${primary[700]};
          ${SlotStyled} {
              opacity: 0.3
          }}
        `
      : css`
          &:hover {
            background-color: ${primary[570]};
          }
          &:active {
            background-color: ${primary[600]};
          }
        `}
`;

const SlotStyled = styled.div`
  color: inherit;
`;

export const Button = ({
  children,
  endSlot,
  startSlot,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      {startSlot && (
        <SlotStyled className="button__slot">{startSlot}</SlotStyled>
      )}
      {children}
      {endSlot && <SlotStyled className="button__slot">{endSlot}</SlotStyled>}
    </ButtonStyled>
  );
};
