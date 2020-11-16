import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  paper: {
    width: '100%',
    background: '#f5f5f5',
  },
  heroImg: {
    width: '100%',
    maxWidth: 440,
    height: '100%',
    maxHeight: 540
  }
}));