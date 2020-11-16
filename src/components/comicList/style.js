import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
      maxWidth: 340,
  },
  media: {
      height: 260,
  },
  cardBg: {
      background: '#3a3837',
  },
  cardTitle: {
      fontSize: '1.5em',
      lineHeight: '0.9em',
      textAlign: 'center',
      color: '#fff'
  },
  cardBtnBg: {
      background: '#1f1f1f',
      justifyContent: 'center'
  },
  cardBtn: {
      color: '#fff',
      paddingRight: 15,
      paddingLeft: 15,
      border: '1px solid #fff'
  }
});
