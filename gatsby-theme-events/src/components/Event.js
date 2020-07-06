import React from "react";
import { Styled } from "theme-ui";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const isOneDay = start.toDateString() === end.toDateString();

  return (
    <>
      <time dateTime={start.toISOString()}>
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          -
          <time dateTime={end.toISOString()}>
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </>
      )}
    </>
  );
};

const Event = ({ name, location, url, startDate, endDate }) => {
  return (
    <div>
      <Styled.h2>
        {name} ({location})
      </Styled.h2>
      <p>
        <EventDate startDate={startDate} endDate={endDate} />
      </p>
      <Styled.p>
        Website: <a href={url}>{url}</a>
      </Styled.p>
    </div>
  );
};

export default Event;
