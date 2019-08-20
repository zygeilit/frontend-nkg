
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render() {
    return (
      <div>

        <p style={{ color: 'red' }}>内容自适应, 有断词，换行</p>
        <table className="ptable">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
          </colgroup>
          <thead class="ant-table-thead">
            <tr>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="">John</td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class="">John</td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class="">John</td>
              <td class="">Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown Brown </td>
              <td class="">32</td>
            </tr>
          </tbody>
        </table>

        <br />

        <p style={{ color: 'red' }}>没有断字符，不换行</p>
        <table className="ptable">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
          </colgroup>
          <thead class="ant-table-thead">
            <tr>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="">John</td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class="">John</td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class="">John</td>
              <td class="">BrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrownBrown</td>
              <td class="">32</td>
            </tr>
          </tbody>
        </table>


        <br />

        <p style={{ color: 'red' }}>内容自适应, 超出三个点</p>
        <table className="ptable threepoint">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
          </colgroup>
          <thead class="ant-table-thead">
            <tr>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
              <th class="" rowspan="2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="">J</td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class=""></td>
              <td class="">Brown</td>
              <td class="">32</td>
            </tr>
            <tr>
              <td class="">J</td>
              <td class="">我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文我是中文</td>
              <td class="">32</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}