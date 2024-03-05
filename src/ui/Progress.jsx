import { useEffect, useState } from 'react';
import { differenceInMilliseconds, parseISO } from 'date-fns';

const Progress = ({ receiveDate, deliveryDate }) => {
  const startDate = parseISO(receiveDate); // Replace with your start date
  const endDate = parseISO(deliveryDate); // Replace with your end date
  const maxDuration = differenceInMilliseconds(endDate, startDate) / 1000; // Convert to seconds

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const elapsedTime = differenceInMilliseconds(currentTime, startDate) / 1000;

      if (elapsedTime < maxDuration) {
        setProgress(elapsedTime);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [maxDuration, startDate]);

  const percentage = (progress / maxDuration) * 100;

  const percent = percentage.toFixed(2);


  return (
    <div className=' '>
      <div className=" flex items-center">

        <div
          className='  bg-blue-500 h-5 rounded-full'
          style={{
            width: `${percentage}%`,
          }}
        ></div>

        <span>{percentage < 22.3 && '📦'}
          {percentage > 22.3 && percentage < 24.4 && '🚗'}
          {percentage > 24.4 && percentage < 74.4 && '📦'}
          {percentage > 74.4 && percentage < 82.6 && '✈'}
          {percentage > 82.6 && percentage < 92.3 && '📜'} </span>
      </div>

      <p>Progress: {percent < 0 ? 'In progress' : percent + '%'}</p>

      {percentage < 22.3 && <p>Status: {percentage < 22.3 && 'Packaging and loading'}</p>}

      {percentage > 22.3 && percentage < 24.4 && <p>Status: {percentage > 22.3 && percentage < 24.4 && 'Driving to warehouse'}</p>}

      {percentage > 24.4 && percentage < 74.4 && <p>Status: {percentage > 24.4 && percentage < 74.4 && 'Loading & sorting'}</p>}

      {percentage > 74.4 && percentage < 82.6 && <p>Status: {percentage > 74.4 && percentage < 82.6 && 'Shipping'}</p>}

      {percentage > 82.6 && percentage < 92.3 && <p>Status: {percentage > 82.6 && percentage < 92.3 && 'Custom clearance'}</p>}

      {percentage > 92.3 && percentage < 100 && <p>Status: {percentage > 92.3 && percentage < 100 && 'On hold'}</p>}
    </div >
  );
};

export default Progress;