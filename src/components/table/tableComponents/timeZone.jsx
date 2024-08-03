
export const TimeZone = ({lead, ArrowDown, toggleInputVisibility, index, toggleUserMenuDropArrow }) => {


  return (
    <td className="TableHeaderItem" id={`timeZone-${index}`}>
      {lead.timeZone}
      <ArrowDown
        onClick={() => toggleInputVisibility(index, "timeZone", lead._id)}
        className={`arrow-svg ${toggleUserMenuDropArrow(
          index,
          "timeZone"
        )}`}
      />
    </td>
  );
};