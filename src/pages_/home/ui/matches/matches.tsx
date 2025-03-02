"use client";
import { MatchCard } from "@/entities/match";
import { useMatches } from "@/entities/match/api/match-list-query";
import React from "react";
import styled from "styled-components";

const MatchesList = styled.ul<{ $isFetching?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${(props) => (props.$isFetching ? `opacity: 0.8` : ``)}
`;

const Matches = () => {
  const { data, isFetching } = useMatches();

  return (
    <MatchesList $isFetching={isFetching}>
      {data.map((m) => (
        <MatchCard key={m.title} data={m} />
      ))}
    </MatchesList>
  );
};

export { Matches };
