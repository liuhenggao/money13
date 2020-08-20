import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 24px;
    flex:1;
    > .remark{
        display:flex;
        justify-content:center;
        align-items: center;
        > input{
            flex: 1;
            height: 48px;
            line-height: 48px;
            font-size: 18px;
            border: none;
            outline: none;
            color: #666666;
        }
        > label{
            line-height: 48px;
            color: #aeaeae;
        }
        .tagsList{
            flex: 1;
        }
    }
`

function RemarkBlock() {
    return (<Wrapper>
        <div className="remark">
            <label>标签：</label>
            <div className="tagsList"></div>
        </div>
        <div className="remark">
            <label>添加备注：</label>
            <input type="text" placeholder="请输入备注信息" />
        </div>
    </Wrapper>)
}

export default RemarkBlock