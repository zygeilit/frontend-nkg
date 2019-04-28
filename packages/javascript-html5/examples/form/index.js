
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="form">
      <p className="a3dt-note"></p>
      <form>
        <div>
        button: <input type="button"></input>
        </div>
        <div>
        checkbox: <input type="checkbox"></input>
        </div>
        <div>
        color: <input type="color"></input>
        </div>
        <div>
        date: <input type="date" required></input>
        </div>
        <div>
        datetime-local： <input type="datetime-local"></input>
        </div>
        <div>
        email： <input type="email"></input>
        </div>
        <div>
        file： <input type="file"></input>
        </div>
        <div>
        hidden：<input type="hidden"></input>
        </div>
        <div>
        image： <input type="image"></input>
        </div>
        <div>
        month： <input type="month"></input>
        </div>
        <div>
        number： <input type="number"></input>
        </div>
        <div>
        password： <input type="password"></input>
        </div>
        <div>
        radio：<input type="radio"></input>
        </div>
        <div>
        range：<input type="range"></input>
        </div>
        <div>
        reset：<input type="reset"></input>
        </div>
        <div>
        search：<input type="search"></input>
        </div>
        <div>
        tel：<input type="tel"></input>
        </div>
        <div>
        text：<input type="text"></input>
        </div>
        <div>
        time：<input type="time"></input>
        </div>
        <div>
        url：<input type="url"></input>
        </div>
        <div>
        week：<input type="week"></input>
        </div>
        <div>
        progress: <progress value="22" max="100"></progress> 
        </div>
        <div>
        meter: <meter value="3" min="0" max="10">十分之三</meter>
        </div>
        <div contentEditable="true">
          123456
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  }
}
