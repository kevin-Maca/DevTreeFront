type ErrorMessageProps = {

    children: React.ReactNode
}
export default function ErrorMessage({children} : ErrorMessageProps){

    return(
        <p className="bg-red-100 text-red-600 p-3 text-sm font-bold text-center">{children}</p>
    )

}