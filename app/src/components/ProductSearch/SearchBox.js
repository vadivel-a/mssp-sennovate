import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchinput:{
    background:"#fff"
  }
}));
const solutionList = [
  { title: 'SSO'},
  { title: 'MFA'},
  { title: 'RRA'}
];
const options = solutionList.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});
export default function SearchBox(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
      <Autocomplete
        id="grouped-demo"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        style={{ width: '100%' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          props.onChangeSetInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="What are you looking for?" variant="outlined" color="secondary" className={classes.searchinput} />}
      />
  );
}
