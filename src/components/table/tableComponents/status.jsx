
export const Status = ({ index, lead, ArrowDown, toggleInputVisibility, toggleUserMenuDropArrow}) => {
  
  
  return (
    // <td className="TableHeaderItem" id={`status-${index}`}>
    //   {lead.status}
    //   <ArrowDown
    //     onClick={() => toggleInputVisibility(index, "status", lead._id)}
    //     className={`arrow-svg ${toggleUserMenuDropArrow(
    //       index,
    //       "status"
    //     )}`}
    //   />
    // </td>
        <td className="TableHeaderItem" id={`status-${index}`}>
      {lead.status}
      <ArrowDown
        onClick={() => toggleInputVisibility(index, "status", lead._id)}
        className={`arrow-svg ${toggleUserMenuDropArrow(
          index,
          "status"
        )}`}
      />
    </td>
  );
};
