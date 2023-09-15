import React from 'react'
import { Text,View } from 'react-native'
import { Auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Redirect } from 'expo-router';
// Logic
export default function App(){
    const [user,Loading,error] = useAuthState(Auth)
    if(!user){
        console.log('not user')
        return <Redirect href={"/login/"} />
    }
    else{
        return <Redirect href={"/home/"} />
    }
    return(
        <View>
            <Text>Loading</Text>
        </View>
    )
}