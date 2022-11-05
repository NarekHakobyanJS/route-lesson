import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import CustomLink from './CustomLink';
//Outlet component ը նախատեսվածա նրա համար որ են component րը
//որոնք պետքա դինամիկ կերպով փոխվեն ցույց տա նրանց գտնվելու վայրը Ռազմետկայում

//NavLink-ը թույլա տալիս մեզ ստանալ active class-ը եթե այն կա css-ում և default նրա style-երը ընդունումա
//եթե մենք ցանկանում ենք օգտագործ էլ ուրիշ class օրինակ active-link Մենք կարող ենք օգտագործ էլ 
//NavLink-ի className-ը որը ընդունումա ոչ միայն տեքստ այլ նաև Ֆունկցիա։ այդ Ֆունկցիան որպես արգումենտ 
//ընդունումա Օբյեկտ որը ունի isActive բանալին, այդ բանալին կարող ենք Դեստրուկտիզացիա անել և Պայմանով ստուգել
//եթե հղումը համընկնում է անել հետևյալը Տես ներքևի կոդը․․․
// <NavLink to="/" className={({isActive}) => isActive ? "active-link" : null}>Գլխավոր</NavLink>
function Loyout() {
    const isActive = ({isActive}) => isActive ? "active-link" : null
    return (
        <>
            <header className='header'>
                {/* Link, կամ NavLink օգտագործվումա էջերի մեջ անցման համար,
                 որը տեղիա ունենում առանց ծրագիրը թարմացնելու
                */}
                <NavLink to="/" className={isActive}>Գլխավոր</NavLink>
                <NavLink to="/posts" className={isActive}>Բլոգ</NavLink>
                {/* թե ինչի համարա նախատեսված CustomLink - ը տես  CustomLink-ի ֆայլում*/}
                <CustomLink to="/about" className={isActive}>Ծրագրի մասին</CustomLink >
            </header>
            {/* դինամիկ կերպով փոխվող  component րը*/}
            <Outlet />
            <footer>
                2022
            </footer>
        </>
    )
}

export default Loyout