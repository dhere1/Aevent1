import {BellOutlined, UserOutlined} from "@ant-design/icons"
import { Card, Menu } from "antd"
import React, { Children } from "react"

const navbaritems=[
    {
        label:"Admin",
        key:"Admin",

    },
    {
        label:"Notifications",
        key:"notification",
        icon:<BellOutlined />
    },
    {
        label:"Profile",
        key:"profile",
        icon:<UserOutlined/>
    }
]

const SidebarItems=[
    {
        key:"sub1",
        label:"Dashboard",
        type:"group",
    },
    {
        key:"sub2",
        label:"Event Management",
   
        children:[
            {
                key:"g1",
                label:"Create Event"
            },
            {
                key:"g2",
                label:"View Event",
            },
            {
                key:"g3",
                label:"Delete Event",
            },
            {
                key:"g4",
                label:"Post Event Materials",
            }
        ]
    },
    {
        key:"sub3",
        label:"User Management",
        children:[
            {
                key:"u1",
                label:"Approve/Dismiss Organizer Request",
            },
            {
                key:"u2",
                label:"View Request"
            },
            {
                key:"u3",
                label:"Monitor User"
            }
        ]

    },
    {
        key:"sub4",
        label:"Report and Stat"
    },
    {
        key:"sub5",
        label:"Feedback"
    }
]

const Dashboard=()=>{
    return(
        <div style={{backgroundColor:""}}>
            <div className="Navbar-main-container" >
                
                <Menu style={{height:"80px", backgroundColor:"#DEDBAF", fontSize:"18px"}} mode="horizontal" items={navbaritems}></Menu>
            </div>

        <div style={{display:"flex"}}>
        <div className="Sidebar" style={{width:"400px", height:"100%"}}>
            <Menu mode="inline" items={SidebarItems} defaultOpenKeys={["sub2"]}  height=""></Menu>
            </div>
          <div style={{marginLeft:"20px", marginTop:"20px"}}>
            <div style={{display:"flex"}}>
            <Card title={<></>} style={{marginRight:"20px"}}>
                Total users
            </Card>
            <Card style={{marginRight:"20px"}}>
                Total events
            </Card>
            <Card style={{marginRight:"20px"}}>
                Total Request
            </Card>
            <Card style={{marginRight:"20px"}}>
                Total Request
            </Card>
            </div>
           
          </div>
        </div>
            
          
        </div>
    )
}

export default Dashboard