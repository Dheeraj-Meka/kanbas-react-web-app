import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";
import { stat } from "fs";
const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        desc: "New Assignment Description",
        points: 100,
        dueDate: "1999-01-01",
        availableFromDate: "1999-01-01",
        availableUntilDate: "1999-01-01"
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        addAssignment: (state, action) => {
            state.assignments =[
                {
                    ...action.payload,
                    _id: new Date().getTime().toString(),
                },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if(assignment._id == action.payload.assignmentData._id){
                debugger;
                    return action.payload.assignmentData;
                } else {
                    return assignment;
                }
            });
            
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});
export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;