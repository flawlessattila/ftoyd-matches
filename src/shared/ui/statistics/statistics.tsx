"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

type StatisticProps = {
  label: ReactNode;
  value: ReactNode;
};

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #6e6f72;
  padding-right: 8px;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Statistics = ({ label, value }: StatisticProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </div>
  );
};

export { Statistics };
