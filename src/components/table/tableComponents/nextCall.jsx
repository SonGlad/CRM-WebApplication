import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import { useState, useEffect ,useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { patchNextCall } from "../../../redux/Lead/lead-operation";



export const NextCall = ({ lead }) => {
  const [date, setDate] = useState(null);
  const dateNow = useRef(new Date());
  const dispatch = useDispatch();


  const nextCallDate = useMemo(() => {
    return lead.nextCall ? new Date(lead.nextCall) : null;
  }, [lead.nextCall]);


  const isOverdue = date && date < dateNow.current;
  const timeLeft = date ? date - dateNow.current : 0;
  const isAlmostDue = !isOverdue && timeLeft <= 6 * 60 * 60 * 1000;
  const isToday = date && dateNow.current.toDateString() === date.toDateString();
  const minDateOption = date && date > dateNow.current ? "today" : null;
  const minTimeOption = isToday ? dateNow.current.toTimeString().slice(0, 5) : null;


  useEffect(() => {
    if (lead.nextCall) {
      setDate(nextCallDate);
    } else {
      setDate(null);
    }
  }, [lead.nextCall, nextCallDate]);


  const submitNextCallDate = () => {
    if ((date !== (nextCallDate || null)) && (date !== dateNow.current)) {
      if (isOverdue) {
        setDate(null);
      } else {
        const updatedDate = date.toISOString().slice(0, 16)
        dispatch(patchNextCall({
          id: lead._id, 
          leadNextcall: updatedDate 
        }))
      }
    }
  };


  return (
    <td className="TableHeaderItem"
      style={{
        backgroundColor: isOverdue
          ? '#ff000082'
          : isAlmostDue
          ? '#223f53'
          : 'transparent'
      }}
    >
      <div className="calendar-cont">
        <Flatpickr
          data-enable-time
          value={date ? date : ''}
          onChange={([date]) => setDate(date)}
          options={{
            dateFormat: "d.m.Y  H:i",
            minDate: minDateOption,
            minTime: minTimeOption,
            weekNumbers: true,
            "locale": {
              "firstDayOfWeek": 1
            },
          }}
          placeholder="Select Date/ Time"
          onClose={submitNextCallDate}
        />   
      </div>
    </td>
  );
};
