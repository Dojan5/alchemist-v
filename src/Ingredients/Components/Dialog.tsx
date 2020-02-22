import * as React from 'react';
import { Dialog as MDialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { useIngredientsHook } from '../state/ingredients.facade';
import { isNullOrUndefined } from 'util';
import { Effect } from '../../Effects/state/effect.model';

interface IDialogProps {
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
});

export const Dialog: React.FunctionComponent<IDialogProps> = (props) => {
  const [ ingredients, activeIngredient, facade ] = useIngredientsHook();

  const handleClose = () => {
    facade.clearActive();
  }
  return (
    <MDialog
      open={!isNullOrUndefined(activeIngredient)}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent>
        <Typography variant="h5">
          {activeIngredient?.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {activeIngredient?.value}
        </Typography>
        <DialogContentText>
          {/* {activeIngredient?.primary.name} <br/>
          {activeIngredient?.secondary.name} <br/>
          {activeIngredient?.tertiary.name} <br/>
          {activeIngredient?.quaternary.name} <br/> */}
        </DialogContentText>
      </DialogContent>
    </MDialog>
  );
};
