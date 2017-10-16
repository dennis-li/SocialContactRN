/**
 * Created by kerwinliu on 2017/9/14.
 */


import Event from '../event/event'
import Friend from '../friend/friend'
import AddFriend from '../friend/addFriend'

//所有页面路由匹配
export  default
{
    Event:{
        name:'事件',
        component:Event
    },
    Friend:{
        name:'朋友',
        component:Friend
    },
    AddFriend:{
        name:'添加朋友',
        component:AddFriend
    },
}