import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import s from 'styles/button/button.module.css';
import { useSelector } from 'react-redux';
import { selectSpinner } from 'bll/selectors/Selectors';


type ButtonType = {
  onClick: () => void,
  title: string
}
export default function BasicButtons({ title, onClick }: ButtonType) {
  const openSpinner = useSelector(selectSpinner);

  return (
    <div className={s.button}>
      <Stack spacing={2} direction='row'>

        <Button variant='contained' onClick={onClick} disabled={openSpinner}>{title}</Button>

      </Stack>
    </div>
  );
}
