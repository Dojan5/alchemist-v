import * as React from 'react';
import { IngredientList, Search, Dialog } from './Components';
export interface IIngredientsProps {
}

export default function Ingredients(props: IIngredientsProps) {
  return (
    <div>
      <Search />
      <IngredientList />
      <Dialog />
    </div>
  );
}
