import React from 'react';
import { useSelector } from 'react-redux';
import { selectSpinner } from 'bll/selectors/Selectors';
import { Story } from 'ui/components/story/Story';
import Spinner from 'ui/utils/Spinner';


export const News = () => {

  const openSpinner = useSelector(selectSpinner);

  if (openSpinner) {
    return <Spinner />;
  }

  return (
    <div>
      <Story />
    </div>
  );
};

