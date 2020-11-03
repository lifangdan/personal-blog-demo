import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/dataStructures/index',
        name:'DataStructures',
        component: LayoutTwo,
        redirect: '/dataStructures/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'数据结构和算法',
        },
        children: [
            {
                path: '/dataStructures/page1',
                name: 'page1',
                component: () => import('@/views/dataStructures/page1'),
                meta:{
                    title:'dataStructures页面1',
                }
            },
        ]
    },
]
