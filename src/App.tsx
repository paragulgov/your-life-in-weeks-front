import { formatDistanceToNowStrict } from 'date-fns';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Calculator from './components/Calculator/Calculator';
import Weeks from './components/Weeks/Weeks';
import classes from './App..module.css';

export interface IBornValues {
  day: number,
  month: number,
  year: number
}

const App = () => {
  const [weeks, setWeeks] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [bornValues, setBornValues] = useState<IBornValues>({
    day: 2,
    month: 7,
    year: 2000,
  });

  useEffect(() => {
    const dateForFormat = new Date(+bornValues.year, +bornValues.month - 1, +bornValues.day);
    const formatDistanceValue = formatDistanceToNowStrict(dateForFormat, { unit: 'day' });
    const distanceDays = +formatDistanceValue.split(' ')[0];

    setDays(distanceDays);
    setWeeks(Math.floor(distanceDays / 7));
  }, [bornValues]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+event.currentTarget.value)) {
      return;
    }
    if (event.currentTarget.name === 'year' && event.currentTarget.value !== '') {
      if (+event.currentTarget.value > new Date().getFullYear() || +event.currentTarget.value < 1) {
        return;
      }
    }
    if (event.currentTarget.name === 'month' && event.currentTarget.value !== '') {
      if (+event.currentTarget.value > 12 || +event.currentTarget.value < 1) {
        return;
      }
    }
    if (event.currentTarget.name === 'day' && event.currentTarget.value !== '') {
      if (+event.currentTarget.value > 31 || +event.currentTarget.value < 1) {
        return;
      }
    }

    setBornValues({
      ...bornValues,
      [event.target.name]: event.currentTarget.value,
    });
  }, [bornValues]);

  return (
    <div className={classes.app}>
      <h1>Your Life in Weeks</h1>
      <div>
        <Calculator weeksCount={weeks} daysCount={days} bornValues={bornValues} handleChange={handleChange} />
        <Weeks weeksCount={weeks} />
      </div>
    </div>
  );
};

export default App;
