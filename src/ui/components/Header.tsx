import React from 'react';
import style from 'styles/appStyle/header/header.module.css';
import { useAppDispatch } from 'bll/store';
import { GetStoryId, GetTopStories } from 'bll/reducer/news-reducer';
import BasicButtons from 'ui/components/universal/Button';
import { deleteComment, deleteStory } from 'bll/actions/news-action';


export const Header = () => {
  const dispatch = useAppDispatch();
  const giveTopStories = () => {
    debugger
    dispatch(deleteStory([]));
    dispatch(GetTopStories());
  };

  const giveNewListHandler = () => {
    dispatch(deleteStory([]));
    dispatch(deleteComment([]));
    dispatch(GetStoryId());

  };

  return (
    <div className={style.headerContainer}>
      <div className={style.header}>
        <div className={style.containerLogo}>
          <p className={style.p}> Y </p>
        </div>
        <h1 className={style.h1}>
          Hacker News
        </h1>
      </div>
      < BasicButtons onClick={giveTopStories} title='TOP STORIES' />
      < BasicButtons onClick={giveNewListHandler} title='RELOAD' />

    </div>
  );
};

