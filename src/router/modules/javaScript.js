import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/javaScript/index',
        name:'JavaScript',
        component: LayoutTwo,
        redirect: '/javaScript/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'JavaScript',
        },
        children: [
            {
                path: '/javaScript/page1',
                name: 'page1',
                component: () => import('@/views/javaScript/page1'),
                meta:{
                    title:'javaScript页面1',
                    isSide:true,
                }
            },
        ]
    },
]
