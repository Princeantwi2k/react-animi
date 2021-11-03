export const ADD_REPORT = "ADD_REPORT";
export const DELETE_REPORT = "DELETE_REPORT";
export const EDIT_REPORT = "EDIT_REPORT";

export const AddAction = (report) => {
  return (dispact, state, { getFirestore }) => {
    getFirestore()
      .collection("Report")
      .add(report)
      .the((docs) => {
        console.log(docs);
      });
  };
};
