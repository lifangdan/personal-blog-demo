import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/others/index',
        name:'Others',
        component: LayoutTwo,
        redirect: '/others/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'其他',
        },
        children: [
            // {
            //     path: '/typeScript/index',
            //     name: 'index',
            //     component: () => import('@/views/typeScript/index'),
            // },
            {
                path: '/others/page1',
                name: 'page1',
                component: () => import('@/views/others/page1'),
                meta:{
                    title:'others页面1',
                    isSide:true,
                }
            },
        ]
    },
]
