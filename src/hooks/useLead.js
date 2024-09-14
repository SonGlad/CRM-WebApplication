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
  selectSelectedOfficeLeadsCheckedCheckbox,
  selectLeadDetailByIdLocation,
  selectIsSuccess,
  selectAllComments,
  selectIsAllCommentsLoading,
  selectIsAllCommentsError,
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
  const selectedOfficeLeadsCheckedCheckbox= useSelector(selectSelectedOfficeLeadsCheckedCheckbox);
  const leadDetailByIdLocation = useSelector(selectLeadDetailByIdLocation);
  const isSuccess = useSelector(selectIsSuccess);
  const allComments = useSelector(selectAllComments);
  const isAllCommentsLoadding = useSelector(selectIsAllCommentsLoading);
  const isAllCommentsError = useSelector(selectIsAllCommentsError);



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
    selectedOfficeLeadsCheckedCheckbox,
    leadDetailByIdLocation,
    isSuccess,
    allComments,
    isAllCommentsLoadding,
    isAllCommentsError 
  };
};