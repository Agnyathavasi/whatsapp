const cont = [
    {
        id:1,
        name:"Contact 1",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Here is sample msg One",
        time:"16:19",
        img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid:MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib:rb-1.2.1&w:1000&q:80"
    },
    {
        id:2,
        name:"Contact 2",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:'Here is sample msg Two',
        time:"16:18",
        img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib:rb-1.2.1&w:1000&q:80"
    },
    {
        id:3,
        name:"Contact 3",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:"Here is sample msg Three",
        time:"Yesterday",
        img:"https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80"
    },
    {
        id:4,
        name:"Contact 4",
        seen:"true",
        sent:"false",
        recieved:"false",
        message:"Here is sample msg Four",
        time:"Yesterday",
        img:"https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:710&q:80"
    },
    {
        id:5,
        name:"Contact 5",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Here is sample msg Five",
        time:"Yesterday",
        img:"https://images.unsplash.com/photo-1489993360877-883980cc7333?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80"
    },
    {
        id:6,
        name:"Contact 6",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Hello sir",
        time:"Yesterday",
        img:"https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib:rb-1.2.1&ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto:format&fit:crop&w:670&q:80"
    },
    {
        id:7,
        name:"Contact 7",
        seen:"true",
        sent:"false",
        recieved:"false",
        message:"Go dip your head in gutter",
        time:"Yesterday",
        img:"https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:667&q:80"
    },
    {
        id:8,
        name:"Contact 8",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:"Yesht Cute ala?",
        time:"9/1/21",
        img:"https://images.unsplash.com/photo-1578981320111-c7e9426cd6e8?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:500&q:80"
    },
    {
        id:9,
        name:"Contact 9",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Hello im already there",
        time:"9/1/21",
        img:"https://images.unsplash.com/photo-1630170140267-c90fd88ee26c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id:10,
        name:"Contact 10",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Macha Neen Badukbeka",
        time:"9/1/21",
        img:""
    },
    {
        id:11,
        name:"Contact 11",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:'Hey actually ee pic nal maathra braces bandide',
        time:"17:51",
        img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib:rb-1.2.1&w:1000&q:80"
    },
    {
        id:12,
        name:"Contact 12",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:"Loooooo en gotta, Thika thara aaithu ivattu",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80"
    },
    {
        id:13,
        name:"Contact 13",
        seen:"true",
        sent:"false",
        recieved:"false",
        message:"Maga next level ley... Heavy!!!",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:710&q:80"
    },
    {
        id:14,
        name:"Contact 14",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Shata looooo bramhana... yeno nin maathu",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1489993360877-883980cc7333?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80"
    },
    {
        id:15,
        name:"Contact 15",
        seen:"false",
        sent:"false",
        recieved:"true",
        message:"Hello sir",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib:rb-1.2.1&ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto:format&fit:crop&w:670&q:80"
    },
    {
        id:16,
        name:"Contact 16",
        seen:"true",
        sent:"false",
        recieved:"false",
        message:"Go dip your head in gutter",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:667&q:80"
    },
    {
        id:17,
        name:"Contact 17",
        seen:"false",
        sent:"true",
        recieved:"false",
        message:"Yesht Cute ala?",
        time:"17:51",
        img:"https://images.unsplash.com/photo-1578981320111-c7e9426cd6e8?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:500&q:80"
    }
]

export default cont;