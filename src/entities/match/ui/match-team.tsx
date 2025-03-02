import { TeamTemplateIcon } from "@/shared/ui/icons/icons";
import React from "react";
import styled, { css } from "styled-components";

type MatchTeamProps = {
  name: string;
  type: "home" | "away";
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Name = styled.span<{ $reverseDir?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  ${(props) =>
    props.$reverseDir &&
    css`
      order: -1;
    `}
`;

const MatchTeam = ({ name, type = "home" }: MatchTeamProps) => {
  return (
    <Container>
      <TeamTemplateIcon /> <Name $reverseDir={type == "away"}>{name}</Name>
    </Container>
  );
};

export { MatchTeam };
