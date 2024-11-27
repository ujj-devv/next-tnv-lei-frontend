import React from 'react'
import "./footer-link-group.scss"
import Link from 'next/link'
import { FooterLinkGroupPropType } from './footer-link-group.types'


const FooterLinkGroup = ({ linksArray, title }:FooterLinkGroupPropType) => {
    return (
        <>
            <div className="footerLinkGroup__wrapper">
                {" "}
                <h3 className="title">
                    {title}
                </h3>
                {linksArray.map(({ name, id }) => (
                    <Link key={id} className="link" href={id}>
                        {name}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default FooterLinkGroup
