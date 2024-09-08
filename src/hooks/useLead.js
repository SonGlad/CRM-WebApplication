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
  selectLeadDetailById,
  selectSelectedExternalLeadsCheckedCheckbox,
  selectSelectedAssignLeadsCheckedCheckbox,
  selectLeadDetailByIdLocation,
  selectIsSuccess,
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
  const selectedExternalLeadsCheckedCheckbox = useSelector(selectSelectedExternalLeadsCheckedCheckbox);
  const leadDetailById = useSelector(selectLeadDetailById);
  const selectedAssignLeadsCheckedCheckbox = useSelector(selectSelectedAssignLeadsCheckedCheckbox);
  const leadDetailByIdLocation = useSelector(selectLeadDetailByIdLocation);
  const isSuccess = useSelector(selectIsSuccess);



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
    selectedExternalLeadsCheckedCheckbox,
    leadDetailById,
    selectedAssignLeadsCheckedCheckbox,
    leadDetailByIdLocation,
    isSuccess
  };
};