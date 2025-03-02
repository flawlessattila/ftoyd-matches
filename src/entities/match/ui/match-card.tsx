"use client";
import { FloatingCard } from "@/shared/ui/floating-card/floating-card";
import React from "react";
import styled from "styled-components";
import { MatchTeam } from "./match-team";
import { Match } from "../model/match.types";
import { MatchStatus } from "./match-status";

const Container = styled(FloatingCard)`
  padding: 16px 36px;
  display: flex;
  justify-content: space-between;
`;

Container.defaultProps = {
  $level: 1,
};

const MatchCard = ({
  data: { homeTeam, homeScore, awayTeam, awayScore, status },
}: {
  data: Match;
}) => {
  return (
    <Container>
      <MatchTeam name={homeTeam.name} type="home" />
      <MatchStatus
        homeScore={homeScore}
        awayScore={awayScore}
        status={status}
      />
      <MatchTeam name={awayTeam.name} type="away" />
    </Container>
  );
};

export { MatchCard };
