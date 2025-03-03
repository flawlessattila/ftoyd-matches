"use client";
import { useMatches } from "@/entities/match/api/match-list-query";
import { Alert } from "@/shared/ui/alert/alert";
import { Button } from "@/shared/ui/button/button";
import { RefreshIcon } from "@/shared/ui/icons/icons";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.header`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.span`
  font-family: var(--font-tactic);
  font-weight: 900;
  font-style: italic;
  font-size: 32px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const rotate = keyframes`
  from {
     transform: rotate(0deg);
  }
  50% {
     transform: rotate(180deg);
  }
  to {
     transform: rotate(360deg);
  }
`;

const UpdateButton = styled(Button)`
  ${(props) =>
    props.disabled
      ? css`
          & .button__slot {
            animation: ${rotate} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `
      : ``}
`;

const ControlPanel = () => {
  const { refetch, isFetching, isError } = useMatches();

  return (
    <Container>
      <Heading>Match Tracker</Heading>
      <Actions>
        {isError && (
          <Alert
            title="Ошибка: не удалось загрузить информацию"
            $appearWithAnimation
          />
        )}
        <UpdateButton
          disabled={isFetching}
          onClick={refetch.bind(null, {})}
          endSlot={<RefreshIcon />}
        >
          Обновить
        </UpdateButton>
      </Actions>
    </Container>
  );
};

export { ControlPanel };
