import React, { useEffect, useState } from 'react'
import './modal.css'
export default function Modal(props) {
    const [ isVisible, setIsVisible ] = useState('')
    useEffect(() => {
        const btn = document.getElementById(props.btnOpen)
        btn.addEventListener('click', () => {
            setIsVisible('active')
            console.log(isVisible)
        })
    }) 
    return(
        <div className={`wrapModal ${isVisible}`}>
            <div className={`modal ${props.modalClass ? props.modalClass : ''} `}>
                {props.btnOpen2Modal ?
                (
                    <button 
                        id={props.btnOpen2Modal}
                        className={`buttonClose fas fa-times-circle`}
                        onClick={() => setIsVisible('')}
                    />
                ) : (
                    <button 
                        className={`buttonClose fas fa-times-circle`}
                        onClick={() => setIsVisible('')}
                    />
                )}
                {props.modalTitle ? (
                    <h3 className="modalHeader">
                    {props.modalTitle} 
                    </h3>
                ) : ('') }
                <div className="modalBody">
                    {props.children}
                </div>
            </div>
        </div>
    )
}