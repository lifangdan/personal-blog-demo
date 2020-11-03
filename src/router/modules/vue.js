import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/vue/index',
        name:'Vue',
        component: LayoutTwo,
        redirect: '/vue/page1',
        meta: {
            isInside:true,//是否是内页的菜单
            title:'Vue',
        },
        children: [
            {
                path: '/vue/page1',
                name: 'page1',
                component: () => import('@/views/vue/page1'),
                meta:{
                    title:'vue页面1',
                    isSide:true,
                }
            },
        ]
    },
]
