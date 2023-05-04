import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from 'styles/pages/news/news.module.css';
import { GetComments } from 'bll/reducer/news-reducer';
import { useAppDispatch } from 'bll/store';
import { useSelector } from 'react-redux';
import { selectComment } from 'bll/selectors/Selectors';
import { CommentsResponseType } from 'api/types/types';
import BasicButtons from 'ui/components/universal/Button';
import { deleteComment } from 'bll/actions/news-action';
import s from 'styles/pages/storyPage/storyPage.module.css';

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const comment = useSelector(selectComment);
  const comeBackHandler = () => {
    navigate('/main');
  };
const reloadCommentsHandler = ()=>{
  dispatch(deleteComment([]))
  state.kids.forEach((el: any) => dispatch(GetComments(el)))
}


  useEffect(() => {
       dispatch(deleteComment([]));
    if (!state.kids || state.kids === 0) return;
    state.kids.forEach((el: any) => dispatch(GetComments(el)));


  }, [state.kids]);
  console.log(state.kids, 'INFO-COMMENT');

  console.log(comment);
  return (

    <div>
      <div className={style.news}>
        <h1>
          {state.title}
        </h1>
        <p> by</p>
        <h3>{state.by}</h3>
        <h4>{new Date(state.time * 1000).toString()}</h4>
        <h5>Comments : {state.descendants}</h5>
        <a href={state.url}><h4>{state.url}</h4></a>
        <BasicButtons onClick={comeBackHandler} title='Back to news' />
        <BasicButtons onClick={reloadCommentsHandler} title='RELOAD COMMENTS' />

        <h2>Comments</h2>
        {comment.length === 0 ? <div>No Comments</div>
          : <div>{comment.map(
            ({
               id, text, by,
             }: CommentsResponseType) => (
              <div key={id} className={style.comment}>
                <div>
                  <span className={s.title}> {by}</span> : {text}
                </div>

              </div>
            ),
          )}</div>
        }

      </div>

    </div>
  );
};



