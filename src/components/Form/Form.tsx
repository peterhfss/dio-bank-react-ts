import { FormEvent, useState } from 'react';
import styles from './Form.module.scss';



const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event:FormEvent){
        event.preventDefault()

        const user ={
            email: email,
            password: password
        }

        console.log(user)
        initialState()
    }

    function initialState(){
        setEmail('')
        setPassword('')
    }

    return(
        <>
            <div className={styles.containerLogin}>
                <div className={styles.wrapLogin}>
                    <form className={styles.loginForm} onSubmit={handleLogin}>
                            <span className={styles.loginTitle}>Welcome to Dio Bank!</span>

                            <div className={styles.wrapInput}>
                                <input 
                                    className={email != "" ? styles.hasValue: styles.input} 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className={styles.focusInput} data-placeholder='Email'></span>
                            </div>

                            <div className={styles.wrapInput}>
                                <input 
                                    className={password != "" ? styles.hasValue:styles.input} 
                                    type="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className={styles.focusInput} data-placeholder='Password'></span>
                            </div>

                            <div className={styles.wrapButton}>
                                <button className={styles.loginFormBtn}>Login</button>
                            </div>

                            <div className={styles.wrapLink}>
                                <span className={styles.link}>
                                    Não possui conta? 
                                    <a href="#" className={styles.textLink}>Criar conta</a>
                                </span>
                                
                            </div>
                    </form>       
                </div>
            </div>
        </> 
    )
}

export default Form;