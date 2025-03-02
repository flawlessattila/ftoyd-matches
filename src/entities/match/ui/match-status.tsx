import React from "react";
import { EMatchStatus } from "../model/match.types";
import { StatusBadge } from "@/shared/ui/status-badge/status-badge";
import styled from "styled-components";

type MatchStatusProps = {
  homeScore: number;
  awayScore: number;
  status: EMatchStatus;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const getMatchStatusBadge = (status: EMatchStatus) => {
  switch (status) {
    case EMatchStatus.Ongoing:
      return <StatusBadge color="success">Live</StatusBadge>;
    case EMatchStatus.Finished:
      return <StatusBadge color="primary">Finished</StatusBadge>;
    case EMatchStatus.Scheduled:
      return <StatusBadge color="warning">Match preparing</StatusBadge>;
  }
};

const MatchStatus = ({ homeScore, awayScore, status }: MatchStatusProps) => {
  return (
    <Container>
      {`${homeScore} : ${awayScore}`}
      {getMatchStatusBadge(status)}
    </Container>
  );
};

export { MatchStatus };
