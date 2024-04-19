const openMail = (email: string) => {
    try {
        window.open(`mailto:${email}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
}

const openPhone = (phone: string) => {
    try {
        window.open(`tel:${phone}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
}

export {
    openMail,
    openPhone
}