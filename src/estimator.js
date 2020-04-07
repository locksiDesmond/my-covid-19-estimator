const currentlyInfected = (data) => {
  const Inputdata = data;
  const { reportedCases } = Inputdata;
  const impactCurrentlyInfected = reportedCases * 10;
  const severeCurrentlyInfected = reportedCases * 50;
  return {
    impact: {
      currentlyInfected: impactCurrentlyInfected
    },
    severe: {
      currentlyInfected: severeCurrentlyInfected
    }
  };
};
const completeEstimator = (data) => {
  const { impact, severe } = currentlyInfected(data);
};
const covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;
