
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";


const TodoHeader = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

    return (
         <header className="flex justify-between mb-6 p-5 items-center">
            <h1 className="text-white text-4xl sm:text-[2rem] font-bold tracking-[1rem]">TODO</h1>
            <button className="cursor-pointer" onClick={toggleTheme}>
              <img src={`${themeConfig[theme].icon}`} alt="Alternar Tema" className="w-8 h-8" />
            </button>
          </header>
    )
}

export {TodoHeader}