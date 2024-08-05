import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const setJsonValue = async(value,key)=>{
    if(!value )return;
    try {
        const JSONvalue = JSON.stringify(value);
        AsyncStorage.setItem(key,JSONvalue);
        
    } catch (error) {
        Alert.alert("SomeThing went wrong !","unable to save data please contact the developer ")
    }
}

export const getJsonValue = async(key)=>{
    try {
       await AsyncStorage.getItem(key).then((value)=>{
            return JSON.parse(value)
        })
    } catch (error) {
        console.log(error)
    }
}