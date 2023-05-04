import React, { useEffect } from 'react';
import { Header } from 'ui/components/Header';
import { Pages } from 'ui/pages/Pages';
import { Footer } from 'ui/components/footer/Footer';
import style from 'styles/appStyle/app.module.css';
import { GetStory, GetStoryId } from 'bll/reducer/news-reducer';
import { useAppDispatch } from 'bll/store';
import { useSelector } from 'react-redux';
import { selectNewsId } from 'bll/selectors/Selectors';
import { deleteStory } from 'bll/actions/news-action';


function App() {
  const dispatch = useAppDispatch();
  const storiesId = useSelector(selectNewsId);
  useEffect(() => {
    dispatch(GetStoryId());
    setInterval(() => {
      dispatch(deleteStory([]));
      dispatch(GetStoryId());
    }, 60000);


  }, []);
  useEffect(() => {

    if (!storiesId || storiesId.length === 0) return;

    storiesId.forEach(el => dispatch(GetStory(el)));

  }, [storiesId]);

  return (
    <div className={style.app}>
      <Header />
      <Pages />
      <Footer />

    </div>
  );
}

export default App;
