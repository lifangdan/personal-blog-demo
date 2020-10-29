import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: 'typeScript',
        component: LayoutTwo,
        redirect: 'noredirect',
        children: [
            {
                path: '/typeScript/index',
                name: 'index',
                component: () => import('@/views/typeScript/index'),
            },
        ]
    },
]
