export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
  const filteredDays = state.days.filter((item) => item.name === day);

  if (filteredDays.length) {
    for (let appointment of filteredDays[0].appointments) {
      appointmentList.push(state.appointments[appointment]);
    }
  }
  return appointmentList;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObject = {};
  for (let interviewer in state.interviewers) {
    interviewObject.student = interview.student;
    if (interview.interviewer === state.interviewers[interviewer].id) {
      interviewObject.interviewer = {
        id: state.interviewers[interviewer].id,
        name: state.interviewers[interviewer].name,
        avatar: state.interviewers[interviewer].avatar
      };
    }
  }
  return interviewObject;
}



export function getInterviewersForDay(state, day) {
  let filteredInterviewers = [];
  for (let days of state.days) {
    if (days.name === day) {
      filteredInterviewers = days.interviewers.map(
        interviewer => state.interviewers[interviewer]
      );
    }
  }
  return filteredInterviewers;
}