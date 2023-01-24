import React, { ChangeEvent, memo } from 'react';
import { IBornValues } from '../../App';
import classes from './Calculator.module.css';

interface CalculatorProps {
  weeksCount: number;
  daysCount: number;
  bornValues: IBornValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Calculator: React.FC<CalculatorProps> = memo(props => {
  const { weeksCount, daysCount, bornValues, handleChange } = props;

  return (
    <>
      <div className={classes.calculator}>
        <h3>Enter your Date of Birth</h3>
        <label>
          day
          <input type="text" name="day" value={bornValues.day} onChange={handleChange} />
        </label>

        <label>
          month
          <input type="text" name="month" value={bornValues.month} onChange={handleChange} />
        </label>

        <label>
          year
          <input type="text" name="year" value={bornValues.year} onChange={handleChange} />
        </label>
      </div>

      <div className={classes.data}>
        <h3>Some information:</h3>
        <span>{weeksCount} weeks</span>
        <br />
        <span>{daysCount} days</span>
      </div>
    </>
  );
});

Calculator.displayName = 'Calculator';

export default Calculator;