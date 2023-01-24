import React, { memo } from 'react';
import classes from './Week.module.css';

interface WeekProps {
  index: number;
  weeksCount: number;
}

const Week: React.FC<WeekProps> = memo(props => {
  const { index, weeksCount } = props;

  const className = [classes.week, index < weeksCount ? classes.active : ''].join(' ');

  return (
    <div className={className} />
  );
});

Week.displayName = 'Week';

export default Week;