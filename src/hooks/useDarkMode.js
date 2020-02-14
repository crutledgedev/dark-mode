import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (mode) => {

    const [toggle, setToggle] = useLocalStorage( 'darkmode', mode)
    console.log("toggle", toggle)

    useEffect(()=>{
        if (toggle === true){
            return document.querySelector("body").classList.add("dark-mode")
        } else {
            return document.querySelector("body").classList.remove("dark-mode")
        }
    },[toggle])

    const setMode = e => {
        e.preventDefault();
        setToggle(!toggle);
      };

    return [toggle, setMode]
}