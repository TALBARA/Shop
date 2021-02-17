import React from 'react';
import * as VsIcon from 'react-icons/vsc';
import * as GrIcon from 'react-icons/gr';
import * as MdIcon from 'react-icons/md';
import * as BiIcon from 'react-icons/bi';

export const reportsData = [
    {
        id: "01",
        title: "Account and phising",
        icon: <VsIcon.VscAccount/>,
        description: "Identify, correct and report experiences"
    },
    {
        id: "02",
        title: "Returns and refunds",
        icon: <GrIcon.GrMoney/>,
        description: "Return or change products treatment"
    },
    {
        id: "03",
        title: "Discounts and offers",
        icon: <MdIcon.MdLocalOffer/>,
        description: "Check the discounts and offers experiences"
    },
    {
        id: "04",
        title: "About customer support",
        icon: <BiIcon.BiSupport/>,
        description: "Read about others dealings"
    }
]