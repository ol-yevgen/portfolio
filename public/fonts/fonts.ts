import localFont from 'next/font/local'

export const sofiaPro = localFont({
    variable: '--font-Sofia-Pro-Regular',
    src: [{
        path: './SofiaProRegular.ttf',
        weight: '400',
        style: 'normal',
    },
    {
        path: './SofiaProLight.ttf',
        weight: '300',
        style: 'normal',
    },
    {
        path: './SofiaProMedium.ttf',
        weight: '500',
        style: 'normal',
    },
    {
        path: './SofiaProSemiBold.ttf',
        weight: '600',
        style: 'normal',
    },
    {
        path: './SofiaProBold.ttf',
        weight: '700',
        style: 'normal',
    },
    {
        path: './SofiaProBlack.ttf',
        weight: '900',
        style: 'normal',
    },]
})

export const laBelleAurore = localFont({
    variable: '--font-La-Belle-Aurore',
    src: [{
        path: './LaBelleAurore-Regular.ttf',
        weight: '400',
        style: 'normal',
    },
    ]
})
