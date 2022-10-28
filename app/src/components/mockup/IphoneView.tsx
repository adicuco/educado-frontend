import React, { ReactNode } from 'react'

const IphoneView = ({ children }: { children: ReactNode[] | ReactNode }) => {
    return (
        <div className='flex justify-center items-top'>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IphoneView