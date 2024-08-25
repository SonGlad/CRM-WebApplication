import { useState, useEffect } from "react";

export const ClientTime = ({ lead }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateClientTime = (timeZoneOffset) => {
    const clientTime = new Date(
      currentTime.getTime() + timeZoneOffset * 60 * 60 * 1000
    );
    
    return clientTime.toLocaleString("ru-RU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: undefined 
    });
  };

  return (
    <td className="TableHeaderItem" style={{ maxWidth: "60px", textWrap: "unset"}}>
      {calculateClientTime(lead.timeZone)}
    </td>
  );
};
