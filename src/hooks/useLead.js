import { useSelector } from "react-redux";
import {
  selectActiveOffice,
  selectLeadsLoader,
  selectLeadsError,
  selectLeadResponce,
  selectLeads,
  selectNewLead,
  selectStatus,
  selectStatusLoading,
  selectStatusError,
  selectTimeZone,
  selectTimeZoneLoading,
  selectTimeZoneError,
  selectNewStatusLead,
  selectPathStatusLoading,
  selectPathStatusError,
  selectNewTimeZone,
  selectPatchTimeZoneLoading,
  selectPatchTimeZoneError,
  selectNewCityLead,
  selectPatchCityLeadLoading,
  selectPatchCityLeadError,
  selectNewRegionLead,
  selectPatchRegionLeadLoading,
  selectPatchRegionLeadError,
  selectNewCountryLead,
  selectPatchCountryLeadLoading,
  selectPatchCountryLeadError,
  selectSelectedExternalLeadsCheckedCheckbox,
} from "../redux/Lead/lead-selectors";


export const useLead = () => {
  const leadOffice = useSelector(selectActiveOffice);
  const isLeadLoading = useSelector(selectLeadsLoader);
  const isLeadsError = useSelector(selectLeadsError);
  const isNewLeadDataResponce = useSelector(selectLeadResponce);
  const isLeads = useSelector(selectLeads);
  const newLead = useSelector(selectNewLead);
  const status = useSelector(selectStatus);
  const isStatusLoading = useSelector(selectStatusLoading);
  const isStatusError = useSelector(selectStatusError);
  const timeZone = useSelector(selectTimeZone);
  const isTimeZoneLoading = useSelector(selectTimeZoneLoading);
  const isTimeZoneError = useSelector(selectTimeZoneError);
  const patchStatusLoading = useSelector(selectPathStatusLoading);
  const patchStatusError = useSelector(selectPathStatusError);
  const newStatusLead = useSelector(selectNewStatusLead);
  const newTimeZoneLead = useSelector(selectNewTimeZone);
  const patchTimeZoneLoading = useSelector(selectPatchTimeZoneLoading);
  const patchTimeZoneError = useSelector(selectPatchTimeZoneError);
  const newCityLead = useSelector(selectNewCityLead);
  const patchCityLeadLoading = useSelector(selectPatchCityLeadLoading);
  const patchCityLeadError = useSelector(selectPatchCityLeadError);
  const newRegionLead = useSelector(selectNewRegionLead);
  const patchRegionLeadLoading = useSelector(selectPatchRegionLeadLoading);
  const patchRegionLeadError = useSelector(selectPatchRegionLeadError);
  const newCountryLead = useSelector(selectNewCountryLead);
  const patchCountryLeadLoading = useSelector(selectPatchCountryLeadLoading);
  const patchCountryLeadError = useSelector(selectPatchCountryLeadError);
  const selectedExternalLeadsCheckedCheckbox = useSelector(selectSelectedExternalLeadsCheckedCheckbox);


  return {
    leadOffice,
    isLeadLoading,
    isLeadsError,
    isNewLeadDataResponce,
    isLeads,
    newLead,
    status,
    isStatusLoading,
    isStatusError,
    timeZone,
    isTimeZoneLoading,
    isTimeZoneError,
    newStatusLead,
    patchStatusLoading,
    patchStatusError,
    newTimeZoneLead,
    patchTimeZoneLoading,
    patchTimeZoneError,
    newCityLead,
    patchCityLeadLoading,
    patchCityLeadError,
    newRegionLead,
    patchRegionLeadLoading,
    patchRegionLeadError,
    newCountryLead,
    patchCountryLeadLoading,
    patchCountryLeadError,
    selectedExternalLeadsCheckedCheckbox,
  };
};

