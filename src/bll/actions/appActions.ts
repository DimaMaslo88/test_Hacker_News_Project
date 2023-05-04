export type OpenSpinnerType = ReturnType<typeof openSpinner>
export const openSpinner = (open:boolean)=>({
        type:'app/OPEN-SPINNER',
        open
    }as const)
