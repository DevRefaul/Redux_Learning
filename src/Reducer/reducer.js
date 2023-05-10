export const initialState = {
    count: 0,
    users: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 }
        case "Decrement":
            return { count: state.count - 1 }
        case "Add User":
            return { users: [...state.users, action.payload.user] }
        case "Remove A User":
            const newUsers = state.users.filter(user => user !== action.payload.user)
            return { users: newUsers }
        default: return state


    }




}

export default reducer

