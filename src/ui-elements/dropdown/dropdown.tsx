import React, {useState, useEffect} from 'react';
import './dropdown.scss'
import downArrow from '../../assets/icons/downArrow.svg'

type DropdownProps = {
    options: Option[]
    placeholder: string
    onSelect: (e: string) => void
    theme?: "light" | "dark"
};

type Option = {
    icon?: string
    value: string
}

const Dropdown:React.FC<DropdownProps> = ({placeholder, options, onSelect, theme}) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [selectedPlaceholder, setSelectedPlaceholder] = useState<string>(placeholder)

    const clickOutside = (e: any) => {
        // if(e.target.classList.contains("dropdown")){            
        //     setShowMenu(false)          
        // }
        if(e.target.className !== "title"){
            setShowMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', clickOutside)

        return () => {
            document.removeEventListener('click', clickOutside)
        }
    }, [])
    
    return (
        <div className='dropdown'>
            <div className={`title-container ${theme}`} onClick={()=>setShowMenu(true)}>
                <div className={`title`}>{selectedPlaceholder}</div>
                <img alt='' height={"18px"} src={downArrow}/>
            </div>
            <div className={`menu ${showMenu ? "active" : ""} ${theme}`}>
                {options.map((option, index) => (
                    <div 
                        key={index} 
                        className='option-bar' 
                        onClick={()=>{
                            onSelect(option.value)
                            setSelectedPlaceholder(option.value)
                        }}
                    >
                        {option.icon ? <img alt='icon' src={option.icon}/> : null}
                        <div>{option.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dropdown;