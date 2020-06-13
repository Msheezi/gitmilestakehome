export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('savedState')
        if (serializedState === null){
            return undefined 
        }
        return {rewards:JSON.parse(serializedState)}
    } catch (err){
        return undefined
    }
}

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("savedState", serializedState)
    } catch {
        //ignore write errors
    }
}