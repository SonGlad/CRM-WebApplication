import { useSelector } from "react-redux";
import {
  selectActiveOffice,
  selectLeadsLoader,
  selectLeadsError,
  selectLeadResponce,
  selectLeads,
  selectTotalPages,
  selectTotalLeads,
  selectLeadsAmountPerPage,
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
  selectNewNextCallLead,
  selectPatchNextCallLeadLoading,
  selectPatchNextCallLeadError,
  selectLeadDetailById,
  selectLeadDetailByIdLocation,
} from "../redux/Lead/lead-selectors";


export const useLead = () => {
  const leadOffice = useSelector(selectActiveOffice);
  const isLeadLoading = useSelector(selectLeadsLoader);
  const isLeadsError = useSelector(selectLeadsError);
  const isNewLeadDataResponce = useSelector(selectLeadResponce);
  const isLeads = useSelector(selectLeads);
  const totalPages = useSelector(selectTotalPages);
  const totalLeads = useSelector(selectTotalLeads);
  const leadsAmountPerPage = useSelector(selectLeadsAmountPerPage);
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
  const leadDetailById = useSelector(selectLeadDetailById);
  const newNextCallLead = useSelector(selectNewNextCallLead);
  const patchNextCallLeadLoading = useSelector(selectPatchNextCallLeadLoading);
  const patchNextCallLeadError = useSelector(selectPatchNextCallLeadError);
  const leadDetailByIdLocation = useSelector(selectLeadDetailByIdLocation);


  return {
    leadOffice,
    isLeadLoading,
    isLeadsError,
    isNewLeadDataResponce,
    isLeads,
    totalPages,
    totalLeads,
    leadsAmountPerPage,
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
    leadDetailById,
    newNextCallLead,
    patchNextCallLeadLoading,
    patchNextCallLeadError,
    leadDetailByIdLocation,
  };
};