import css from './ErrosMessage.module.css'

const ErrorMessage = ( {message = 'Error occured! Try later.'}: {message: string} ) => {
  return (
    <div className={css.errorMsg}>
    {message}
    </div>
  )
}

export default ErrorMessage