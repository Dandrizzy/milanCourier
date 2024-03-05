import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProgressBar = ({ startDateAndTime }) => {
  const initialStartDate = new Date(startDateAndTime);
  const startTime = initialStartDate?.getTime();
  const maxDuration = 86400 * 3;

  const { ticketId } = useParams();

  const lastSavedTime = parseInt(localStorage.getItem(`lastSavedTime` + ticketId), 10) || startTime;
  const initialProgress = parseInt(localStorage.getItem(`progress${ticketId}`), 10) || 0;

  const [progress, setProgress] = useState(initialProgress);



  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - lastSavedTime) / 1000;
      if (progress < maxDuration) {
        const newProgress = Math.min(progress + elapsedTime, maxDuration);
        setProgress(newProgress);

        localStorage.setItem(`lastSavedTime` + ticketId, currentTime.toString());
        localStorage.setItem(`progress${ticketId}`, newProgress.toString());
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);

  }, [progress, lastSavedTime, maxDuration, ticketId]);



  const percentage = (progress / maxDuration) * 100;

  return (
    <div>

      <div className="flex items-center">
        <div className=' rounded-full h-5 bg-blue-500' style={{ width: `${percentage}%` }}></div>
        <span>{percentage < 22.3 && '📦'}
          {percentage > 22.3 && percentage < 24.4 && '🚗'}
          {percentage > 24.4 && percentage < 74.4 && '📦'}
          {percentage > 74.4 && percentage < 82.6 && '✈'}
          {percentage > 82.6 && percentage < 92.3 && '📜'} </span>
      </div>

      <p>Progress: {percentage < 0 ? 'In progress' : percentage.toFixed(1) + '%'}</p>

      {percentage < 22.3 && <p>Status: {percentage < 22.3 && 'Packaging and loading'}</p>}

      {percentage > 22.3 && percentage < 24.4 && <p>Status: {percentage > 22.3 && percentage < 24.4 && 'Driving to warehouse'}</p>}

      {percentage > 24.4 && percentage < 74.4 && <p>Status: {percentage > 24.4 && percentage < 74.4 && 'Loading & sorting'}</p>}

      {percentage > 74.4 && percentage < 82.6 && <p>Status: {percentage > 74.4 && percentage < 82.6 && 'Shipping'}</p>}

      {percentage > 82.6 && percentage < 92.3 && <p>Status: {percentage > 82.6 && percentage < 92.3 && 'Custom clearance'}</p>}

      {percentage > 92.3 && percentage < 100 && <p>Status: {percentage > 92.3 && percentage < 100 && 'On hold'}</p>}

      {/* <div className="grid gap-4">
    <label htmlFor="date">Set start date and date: </label>
    <input className=" outline-none border-2 p-2" type="datetime-local" value={startDate.toISOString().slice(0, -8)} onChange={e => setStartDate(new Date(e.target.value))} />
   </div> */}
    </div>
  );
};

export default ProgressBar;