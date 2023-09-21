import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@emotion/styled';

const StyledCard = styled(Card)`
  width: 254px;
  height: 190px;
  transform: rotate(90deg);
  background: #00BCD4;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition-duration: 1.5s;
  transition-property: width, height, transform;

  &:hover {
    width: 190px;
    height: 254px;
    transform: rotate(0deg);
  }
`;

const InfoBox = styled(Box)`
  width: 100%;
  height: 200px;
  padding: .7rem;
  font-size: smaller;
  border-radius: 1rem;
  text-align: center;
  background-color: #fae4c3;
  color: #fae4c3;
  transition-duration: 1s;
  transition-property: color;

  &:hover {
    color: #212121;
  }
`;

const MuiCardComponent = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography color="white" fontWeight="700" mb={0.5}>
          01 . 05 . 2022
        </Typography>
        <InfoBox>
          <Typography variant="h6">NOTE</Typography>
        </InfoBox>
      </CardContent>
    </StyledCard>
  );
};

export default MuiCardComponent;