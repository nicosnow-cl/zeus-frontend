const getTimeSince = (current: Date, previous: Date) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current.getTime() - previous.getTime();

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seg. atrás';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' min. atrás';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hrs. atrás';
  } else if (elapsed < msPerMonth) {
    return 'app. ' + Math.round(elapsed / msPerDay) + ' días atrás';
  } else if (elapsed < msPerYear) {
    return 'app. ' + Math.round(elapsed / msPerMonth) + ' meses atrás';
  } else {
    return 'app. ' + Math.round(elapsed / msPerYear) + ' años atrás';
  }
};

export default getTimeSince;
