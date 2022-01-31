import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

import { IPlant } from '../../apiTypes/Plant';
import { TColumn } from './utils/constants';

import { Container, Cell } from './Row.styles';
import getCell from './utils/getCell';

function Row({ plant, columns }: { plant: IPlant; columns: TColumn[] }): JSX.Element {
  const user = localStorage.getItem('user') || '';
  const userEmail = JSON.parse(user).email;

  const { name, id, users } = plant;

  const initSelected = !!users.find((user) => user.email === userEmail);
  const [isSelected, setIsSelected] = useState(initSelected);

  const SELECT_PLANT = gql`
    mutation AddPlantToUser($email: String!, $plantId: Int!) {
      AddPlantToUser(email: $email, plantId: $plantId) {
        plantId
      }
    }
  `;
  const DESELECT_PLANT = gql`
    mutation DeletePlantToUser($email: String!, $plantId: Int!) {
      DeletePlantToUser(email: $email, plantId: $plantId) {
        id
        plantId
        userId
      }
    }
  `;

  const [selectPlant] = useMutation(SELECT_PLANT, {
    variables: {
      plantId: id,
      email: userEmail,
    },
  });
  const [deselectPlant] = useMutation(DESELECT_PLANT, {
    variables: {
      plantId: id,
      email: userEmail,
    },
  });

  const handleOnClick = async () => {
    if (isSelected) {
      await deselectPlant();
      setIsSelected(false);
    } else {
      await selectPlant();
      setIsSelected(true);
    }
  };

  const makeReactKey = (col: string, key?: string) => `${name}_${id}_${col}_${key}`;

  return (
    <Container onClick={handleOnClick}>
      {columns.map((column) => (
        <Cell leftPos={column.leftPos} key={makeReactKey(column.key, plant[column.key])}>
          {getCell(column, plant, isSelected)}
        </Cell>
      ))}
    </Container>
  );
}

export default Row;
