
export const Country = ({ index, lead, ArrowDown, toggleInputVisibility, toggleUserMenuDropArrow }) => {

    return (
                <td className="TableHeaderItem" id={`country-${index}`}>
                  {lead.country}
                  <ArrowDown
                    onClick={() => toggleInputVisibility(index, "country", lead._id)}
                    className={`arrow-svg ${toggleUserMenuDropArrow(
                      index,
                      "country"
                    )}`}
                  />
                </td>
    );
};
