import { Button, Container, Link, TextField, Typography } from "@mui/material"
import { Formik,Form,Field,ErrorMessage } from "formik"
import * as Yup from 'yup'
import imagePaths from "../../config/imagePaths"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "../../config/store"
import { requestLogin } from "./AuthSlice"
import Cookies from "js-cookie"

const initialValues = {
    email:'',
    password:''
}

const Login = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const validationSchema = Yup.object({
        email:Yup.string().email(t("invalidEmailMessage")).required(t("requiredMessage")),
        password:Yup.string().min(8,t("passwordAtleastEightCharacters")).required(t("requiredMessage"))
    })

    const handleCookieStorageData = (response:any) => {
        Cookies.set("accessToken",response.payload.data.token)
        Cookies.set("role",response.payload.data.role)
        Cookies.set("kycVerified",response.payload.data.kycVerified)
        Cookies.set("subscribed",response.payload.data.subscribed)
    }


    const handleFormSubmit = (values:any) => {
        const data = {email:values.email,password:values.password}
        dispatch(requestLogin(data)).then((response) => {
            if(response?.payload?.status === 200){
                handleCookieStorageData(response)
            }
        })
    }

  return (
    <div className="login-background-img">
        <Container maxWidth="sm">
            <div className="login-info">
                    <div className="back2u-logo-container">
                        <img src={imagePaths.back2u_logo} alt="Back2U" />
                        <Typography className="welcome-font">{t('loginWelcome')}</Typography>
                        <Typography className="sign-in-text">{t("loginSubtitle")}</Typography>
                    </div>
                    <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                            {()=>(
                                <Form> 
                                    <div className="input-container">
                                        <Typography className="sign-in-text">{t("mail")}</Typography>
                                        <Field as={TextField} name="email" type="text" placeholder={t("mailPlaceHolder")} className="login-input" fullWidth/>
                                        <Typography className="error-message">
                                        <ErrorMessage name="email" />
                                        </Typography>
                                    </div>
                                    <div  className="input-container">
                                        <Typography className="sign-in-text">{t("passwordText")}</Typography>
                                        <Field as={TextField} name="password" type="password" placeholder={t("passwordPlaceHolder")} className="login-input" fullWidth/>
                                        <Typography className="error-message">
                                        <ErrorMessage name="password" />
                                        </Typography>
                                    </div>
                                    <div className="signIn-forget-container">
                                        <Link href="#" underline="none" sx={{mr:2}}>{t("SignInusingEmailOTP")}</Link>
                                        <Link href="#" underline="none">{t("forgetPasswordText")}</Link>
                                    </div>
                                    <div className="input-container">
                                        <Button className="login-btn" type="submit">{t("loginText")}</Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
            </div>
        </Container>
    </div>
    
)
}

export default Login