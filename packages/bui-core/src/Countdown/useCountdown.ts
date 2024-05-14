import { useEffect, useMemo, useState } from 'react';
import { CurrentTime } from './Countdown.types';
import { parseTime } from './utils';

const REFRESH_INTERVAL = 50;

export default ({
  startTime: startTimestamp,
  endTime: endTimestamp,
  onChange,
}) => {
  // 初始化时间差
  const initOffsetTime = useMemo(
    () => startTimestamp - new Date().getTime(),
    [startTimestamp, endTimestamp],
  );
  const [time, setTime] = useState<CurrentTime>(
    parseTime(endTimestamp, initOffsetTime),
  );
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setIsEnd(false);
    if (
      startTimestamp === 0 ||
      endTimestamp === 0 ||
      endTimestamp <= startTimestamp
    ) {
      return;
    }

    // 重新计算时间差
    const offsetTime = startTimestamp - new Date().getTime();

    const timer = setInterval(() => {
      const currentTime = parseTime(endTimestamp, offsetTime);
      setTime(currentTime);
      onChange?.({ value: currentTime });
      if (currentTime.total <= 0 || !endTimestamp) {
        setIsEnd(true);
        clearInterval(timer);
      }
    }, REFRESH_INTERVAL);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  }, [startTimestamp, endTimestamp]);

  return { time, isEnd };
};
