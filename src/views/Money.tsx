import React, { useState } from 'react'
import Layout from 'components/Layout'
import DragIcon from 'components/DragIcon'
import Drawer from 'components/Drawer'
import Header from './money/Header'
import MoneyList from './money/MoneyList'
import AmountTags from './money/AmountTags'
import NumberPad from './money/NumberPad'
import RemarkBlock from './money/RemarkBlock'

function Money() {
    const [state, setState] = useState({
        showEle: false,
        isTypes: true
    })
    const tags = ['use', 'svg']
    function trigger(e: React.MouseEvent) {
        if (tags.includes((e.target as HTMLButtonElement).nodeName)) {
            setState({
                showEle: !state.showEle,
                isTypes: state.isTypes
            })
        }
    }
    function getTypes(data: boolean) {
        setState({
            showEle: state.showEle,
            isTypes: data
        })
    }
    return (
        <Layout className={state.showEle ? 'container' : ''}>
            <Header></Header>
            <div style={{ height: '20%' }}></div>
            <MoneyList></MoneyList>
            <div onClick={trigger} className="wrapper">
                <DragIcon name="money" position={{ 'bottom': '100px', 'right': '32px' }} />
                <Drawer showEle={state.showEle}>
                    <AmountTags getTypes={getTypes}></AmountTags>
                    <RemarkBlock></RemarkBlock>
                    <NumberPad isTypes={state.isTypes}></NumberPad>
                </Drawer>
            </div>
        </Layout >
    )
}
export default Money
