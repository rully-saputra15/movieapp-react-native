import React, { useContext, useEffect, useRef, useState } from "react";
import AboutComponent from "../Components/AboutComponent";
import { Animated, Easing } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { Context } from "../store";


interface AboutContainerProps {

}

type aboutScreenProp = StackNavigationProp<RootStackParamList, 'About'>

const AboutContainer: React.FC<AboutContainerProps> = (props: AboutContainerProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, dispatch] = useContext(Context);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.back(1),
        isInteraction: false,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const handleEmail = (value: string) => {
    setEmail(value);
  }
  const handlePassword = (value: string) => {
    setPassword(value);
  }
  const handleLoginWithAuth0 = async () => {
    //const redirectUrl = AuthSession.makeRedirectUri();
    // const redirectUrl = "192.168.1.8:3000/callback"
    // const clientIdUrl = 'client_id=' + auth0ClientId + "&";
    // const responseTypeUrl = 'response_type=token&';
    // const scopeUrl = 'scope=openid%20profile%20email&';
    // const redirecUrlParam = 'redirect_uri=' + redirectUrl + '&';
    // const loginHint = 'login_hint=' + email
    // const authUrl = `${auth0Domain}/authorize?` + clientIdUrl + responseTypeUrl + scopeUrl + loginHint;
    // console.log(redirectUrl)
    //
    // const result = await AuthSession.startAsync({
    //   authUrl: authUrl
    // });
    // console.log(result)

    await fetch("http://192.168.1.8:3000/register",{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password,
      })
    })
      .then((result)=>{
        console.log(result)
      })
      .catch(console.error)
    // auth0.auth
    //   .passwordRealm({
    //     username:email,
    //     password: password,
    //     realm:'Username-Password-Authentication',
    //     scope: 'openid profile'
    //   })
    //   .then((credentials:PasswordRealmResponse) => {
    //     const tokenId = credentials.idToken;
    //     auth0.auth
    //       .userInfo({token: credentials.accessToken})
    //       .then((result: any) => {
    //         console.log(result)
    //       })
    //       .catch((error : any) => {
    //
    //       })
    //   })

  }

  const handleSignUpWithAuth0 = async () => {
    await auth0.auth
      .createUser({
        email: email,
        password: password,
        connection:'con_3SYAalHPjCs57v7Q',
      })
      .then(console.log)
      .catch(console.error)
  }
  const handleLoginWithMagicLink = async () => {
    const result = await magic.auth.loginWithMagicLink({ email: email })
    console.log(result);

  }
  return (
    <AboutComponent handleEmail={handleEmail}
                    email={email}
                    password={password}
                    handlePassword={handlePassword}
                    handleLoginWithAuth0={handleLoginWithAuth0}
                    handleSignUpWithAuth0={handleSignUpWithAuth0}
                    handleLoginWithMagicLink={handleLoginWithMagicLink}/>
  );
};


export default AboutContainer;
