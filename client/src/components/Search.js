import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 10px',
    display: 'flex',
    margin: '20px auto',
    width: '40%',
    border: '2px solid #0066c0',  
    borderRadius: 50,
    boxShadow: '2px 2px 10px #b3b3b3', 
  },
  input: {
    justifyContent: 'center',
    flex: 1,
    outline: 'none',
    border: 'none',
    padding: 0,
    borderRadius: 40,
    fontSize: 17,
    color: '#0066c0', 
  },
  iconButton: {
    padding: 10,
    color: '#0066c0', 
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');

  const onTextChange = async (e) => {
    setSearch(e.target.value);
  }

  return (
    <Paper className={classes.root}>
      <input
        className={classes.input}
        placeholder="Enter Product Universal ID"
        inputProps={{ 'aria-label': 'Enter Product Universal ID' }}
        onChange={onTextChange}
        onKeyPress={(e) => e.key === 'Enter' ? props.findProduct(search) : onTextChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => props.findProduct(search)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
