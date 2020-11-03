import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/react/index',
        name:'React',
        component: LayoutTwo,
        redirect: '/react/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'React',
        },
        children: [
            // {
            //     path: '/typeScript/index',
            //     name: 'index',
            //     component: () => import('@/views/typeScript/index'),
            // },
            {
                path: '/react/page1',
                name: 'page1',
                component: () => import('@/views/react/page1'),
                meta:{
                    title:'react页面1',
                    isSide:true,
                }
            },
        ]
    },
]
