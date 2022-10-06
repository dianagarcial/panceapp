import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/config";

export const logIn = async (context, { email, password }) => {
    
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
        context.commit('SET_USER', response.user)
    } else {
        throw new Error('Login Failed')
    }
}