import React from 'react'

const CustomInput = (props) => {
    const {type,name,placeholder,className,value,onChange,onBlur,disabled=false} = props
  return (
    <div className="form-floating">
        <input type={type} name={name} className={`form-control ${className}`}  placeholder={placeholder} disabled={disabled} value={value}  onChange={onChange}
          onBlur={onBlur}/>
        <label htmlFor="" className='form-label'>{placeholder}</label>
    </div>
  )
}

export default CustomInput