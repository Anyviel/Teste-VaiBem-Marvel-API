import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 36,
    fontWeight: 500,
    fontFamily: ['Roboto'],
    color: '#fff',
    textDecoration: 'none',
  },
  navBg: {
    background: '#ED1D24',
  },
  space: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0
  },
}));

