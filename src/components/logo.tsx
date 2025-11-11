import Image from 'next/image'

export const LogoIcon = ({size}: {size?: number}) => {
    return (
        <Image src="/logo.svg" alt="Logo" width={size || 32} height={size || 32} />
    )
}
