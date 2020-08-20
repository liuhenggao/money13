import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const Wrapper = styled.div`
    margin-top: 12px;
    > a {
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding: 12px 8px;
        border-bottom: 1px solid #eee;
        > .round{
            width: 40px;
            height: 40px;
            border-radius:50%;
            margin-left: 2%;
            color: white;
            text-align:center;
            line-height: 40px;
        }
        > .record{
            display:flex;
            flex-direction: column;
            flex: 1;
            padding-left: 24px;
            span{
                margin: 4px 0;
            }
            > .counter{
                color: blue;
            }
            > .times{
                color: #999;
            }
        }
        > .consume{
            font-size:24px;
            font-weight: 400;
            margin-right: 4%;
        }
    }
    
`
const Scroll = styled.div`
    overflow:auto;
`
let data = [
    {
        id: 1,
        tag: '餐饮',
        date: '2020-08-19 14:23',
        money: 300,
        type: '-',
        remark: '去海底捞吃火锅'
    },
    {
        id: 2,
        tag: '交房租',
        date: '2020-08-19 14:23',
        money: 3600,
        type: '-',
        remark: '9-12月的房租'
    },
    {
        id: 3,
        tag: '发工资',
        date: '2020-08-19 14:23',
        money: 12000,
        type: '+',
        remark: '9月份的工资'
    },
    {
        id: 4,
        tag: '餐饮',
        date: '2020-08-19 14:23',
        money: 300,
        type: '-',
        remark: '去海底捞吃火锅'
    },
    {
        id: 5,
        tag: '交房租',
        date: '2020-08-19 14:23',
        money: 3600,
        type: '-',
        remark: '9-12月的房租'
    },
    {
        id: 6,
        tag: '发工资',
        date: '2020-08-19 14:23',
        money: 12000,
        type: '+',
        remark: '9月份的工资'
    },
    {
        id: 7,
        tag: '餐饮',
        date: '2020-08-19 14:23',
        money: 300,
        type: '-',
        remark: '去海底捞吃火锅'
    },
    {
        id: 8,
        tag: '交房租',
        date: '2020-08-19 14:23',
        money: 3600,
        type: '-',
        remark: '9-12月的房租'
    },
    {
        id: 9,
        tag: '发工资',
        date: '2020-08-19 14:23',
        money: 12000,
        type: '+',
        remark: '9月份的工资'
    },
    {
        id: 10,
        tag: '餐饮',
        date: '2020-08-19 14:23',
        money: 300,
        type: '-',
        remark: '去海底捞吃火锅'
    },
    {
        id: 11,
        tag: '交房租',
        date: '2020-08-19 14:23',
        money: 3600,
        type: '-',
        remark: '9-12月的房租'
    },
    {
        id: 12,
        tag: '发工资',
        date: '2020-08-19 14:23',
        money: 12000,
        type: '+',
        remark: '9月份的工资'
    }
]

function MoneyList() {
    let nodeList: any = []
    data.forEach((item) => {
        nodeList.push(
            <Wrapper key={item.id}>
                <Link to={{ pathname: `/editMoney/${item.id}` }}>
                    <div className="round" style={{ background: item.type === '+' ? '#54b7f5' : '#f3574e' }}>
                        {item.type === '+' ? '收' : '支'}
                    </div>
                    <div className="record">
                        <span>{item.remark}</span>
                        <span className="counter">{item.tag}</span>
                        <span className="times">{item.date}</span>
                    </div>
                    <div className="consume">
                        {item.type + item.money}
                    </div>
                </Link>
            </Wrapper >
        )
    })
    return <Scroll>{nodeList}</Scroll>
}

export default MoneyList