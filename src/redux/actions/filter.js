export const filterAll = ({ banks }) => async dispatch => {
  try {
    dispatch({ type: 'FILTER_ALL', payload: banks });
  } catch (error) {
    console.log(error);
  }
};

export const filterAp = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'ap' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_AP', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterAn = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'an' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_AN', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterABp = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'abp' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_ABP', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterABn = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'abn' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_ABN', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterBp = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'bp' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_BP', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterBn = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'bn' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_BN', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterOp = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'op' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_OP', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};

export const filterOn = ({ banks }) => async dispatch => {
  try {
    const filterbank = banks.filter(bank => {
      const bld = bank.blood.filter(bl => {
        return bl.group === 'on' && bl.value > 0;
      });
      console.log(bld);
      if (bld.length > 0) return true;
    });
    console.log(filterbank);
    dispatch({ type: 'FILTER_ON', payload: filterbank });
  } catch (error) {
    console.log(error);
  }
};
