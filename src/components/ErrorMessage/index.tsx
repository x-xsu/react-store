import styles from './styles.module.scss';

interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (<div className={ styles.errorMsg }>{ error }</div>)
}