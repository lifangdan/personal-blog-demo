import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/interviews/index',
        name:'Interviews',
        component: LayoutTwo,
        redirect: '/interviews/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'面试题',
        },
        children: [
            {
                path: '/interviews/page1',
                name: 'page1',
                component: () => import('@/views/interviews/page1'),
                meta:{
                    title:'interviews页面1',
                    isSide:true,
                }
            },
        ]
    },
]
