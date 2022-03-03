export const selectCheckin = (date) => {
    return {
        type: "CHECK_IN",
        payload: date
    }
}