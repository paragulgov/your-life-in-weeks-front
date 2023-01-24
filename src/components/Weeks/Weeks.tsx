import React, { memo } from 'react';
import Week from '../Week/Week';
import classes from './Weeks.module.css';

interface WeeksProps {
  weeksCount: number;
}

const Weeks: React.FC<WeeksProps> = memo(props => {
    const { weeksCount } = props;

    const array = Array.from(new Array(5214));

    return (
      <>
        <h2 style={{ textAlign: 'center' }}>100 years in weeks</h2>
        <div className={classes.weeks}>
          {array.map((_, index) => (
            <Week key={index} index={index} weeksCount={weeksCount} />
          ))}
        </div>
      </>
    );
  },
);

Weeks.displayName = 'Weeks';

export default Weeks;