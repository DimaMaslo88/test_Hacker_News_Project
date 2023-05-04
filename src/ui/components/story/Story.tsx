import React from 'react';
import { useSelector } from 'react-redux';
import { selectStory } from 'bll/selectors/Selectors';
import { StoryResponseType } from 'api/types/types';
import { NavLink } from 'react-router-dom';
import style from 'styles/pages/storyPage/storyPage.module.css';

export const Story = () => {

  const stories = useSelector(selectStory);
  return (
    <div className={style.story}>
      {stories.map(
        ({
           id,
           title,
           score,
           by,
           time,
           url,
           kids,
           descendants,

         }: StoryResponseType) => (
          <div key={id} className={style.storyBox}>
            <NavLink to='news' state={{ id, title, by, time, url, kids, descendants }}
                     style={{ textDecoration: 'none' }}>
              <div className={style.title}> {title}  </div>
            </NavLink>
            <div>(by {by})</div>
            <div>Rating:{score}</div>
            <p>Comments :{descendants} </p>
            <div> {new Date(time * 1000).toString()}  </div>
          </div>
        ),
      )}
    </div>
  );
};

