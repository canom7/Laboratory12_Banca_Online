import { history } from '../../core/router';
import { getAccount } from '../../common/api/api';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';
import { onSetValues } from '../../common/helpers';
import { mapMovementsApiToVm as mapMovementsApiToViewModel } from './movements.mappers';
import { getMovementsList as getMovementList } from './movements.api';
import { addMovementRows } from './movements.helpers';

let account = {
  id: '',
  alias: '',
  type: '',
};

const params = history.getParams();
const giveMeDetailsAccount = Boolean(params.id);

// Movements
getMovementList().then((movementList) => {
  const viewModelMovements = mapMovementsApiToViewModel(
    movementList,
    params.id
  );
  if (params.id === undefined) addMovementRows(movementList);
  else {
    const movementsAccount = (movementsVM) =>
      movementsVM.filter((movements) => movements !== undefined); // descartamos los huecos vacios del array
    addMovementRows(movementsAccount(viewModelMovements)); // los imprimimos por pantalla
  }
});

// Account details
if (giveMeDetailsAccount) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  });
}
