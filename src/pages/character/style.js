import { makeStyles } from '@material-ui/core/styles';
import { BorderBottom } from '@material-ui/icons';

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
  heroBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#2d3238'
  },
  heroImg: {
    maxWidth: 300,
    height: '100%',
    maxHeight: 300,
    borderRadius: '50%',
    border: '3px solid #000'
  },
  heroInf: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20
  },
  heroName: {
    fontSize: 18,
    letterSpacing: 0.9,
    marginBottom: 5,
  },
  heroDsc: {
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
}));