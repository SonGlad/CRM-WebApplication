
export const City = ({ index, lead, ArrowDown, toggleInputVisibility, toggleUserMenuDropArrow }) => {

    return (
                <td className="TableHeaderItem" id={`city-${index}`}>
                  {lead.city}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "city", lead._id)}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "city"
                    )}`}
                  />
                </td>
    );
};

