
export const Region = ({ index, lead, ArrowDown, toggleInputVisibility, toggleUserMenuDropArrow }) => {


  return (
    <td className="TableHeaderItem" id={`region-${index}`}>
      {lead.region}
      <ArrowDown
        onClick={() => toggleInputVisibility(index, "region", lead._id)}
        className={`arrow-svg ${toggleUserMenuDropArrow(
          index,
          "region"
        )}`}
      />
    </td>
  );
};
